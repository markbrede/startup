import React, { useEffect, useState } from 'react';
import './ExpenseNotifier.css';

//ensure connection created
let socket;
let expenseNotifierEvents = [];

//notification for all connected clients
function broadcastEvent(event) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(event));
  }
}


export function ExpenseNotifier() {
  const [notifications, setNotifications] = useState([]);

  //initialize connection when the component mounts
  useEffect(() => {
    if (!socket) {
      //secure for production, regular for dev
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const host = window.location.host;
      const wsUrl = `${protocol}//${host}/ws`;
      
      socket = new WebSocket(wsUrl);
      
      socket.onopen = () => {
        console.log('WebSocket connection established');
      };
      
      socket.onclose = () => {
        console.log('WebSocket connection closed');
        //short delay reconnect
        setTimeout(() => {
          socket = null;
        }, 1000);
      };
      
      socket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    }
    
    //incoming messages
    const handleMessage = (event) => {
      const data = JSON.parse(event.data);
      
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        { id: Date.now(), ...data, timestamp: new Date() }
      ]);
      
      expenseNotifierEvents.forEach((handler) => {
        handler(data);
      });
    };
    
    socket.addEventListener('message', handleMessage);
    
    //clean up when unmounted
    return () => {
      socket.removeEventListener('message', handleMessage);
    };
  }, []);
  
  const removeNotification = (id) => {
    setNotifications((prevNotifications) => 
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };
  
  //no presistent notifications (5 secs)
  useEffect(() => {
    const timers = notifications.map((notification) => {
      return setTimeout(() => {
        removeNotification(notification.id);
      }, 5000);
    });
    
    return () => {
      timers.forEach(clearTimeout);
    };
  }, [notifications]);
  
  return (
    <div className="notifications-container">
      {notifications.map((notification) => (
        <div 
          key={notification.id} 
          className={`notification ${notification.type}`}
          onClick={() => removeNotification(notification.id)}
        >
          <div className="notification-header">
            <strong>{notification.userName}</strong>
            <span className="timestamp">
              {new Date(notification.timestamp).toLocaleTimeString()}
            </span>
          </div>
          <div className="notification-message">{notification.message}</div>
        </div>
      ))}
    </div>
  );
}

//reg handler for expense noti
export function registerExpenseNotifierHandler(handler) {
  expenseNotifierEvents.push(handler);
  return () => {
    expenseNotifierEvents = expenseNotifierEvents.filter((h) => h !== handler);
  };
}

//send an expense noti
export function notifyExpense(expenseData, userName, action) {
  let message = '';
  
  switch (action) {
    case 'add':
      message = `added a new ${expenseData.expenseType} expense of $${expenseData.amount} for their ${expenseData.vehicle}`;
      break;
    case 'update':
      message = `updated an expense for their ${expenseData.vehicle}`;
      break;
    case 'delete':
      message = `deleted an expense for their ${expenseData.vehicle}`;
      break;
    default:
      message = `performed an action on an expense for their ${expenseData.vehicle}`;
  }
  
  broadcastEvent({
    type: 'expense',
    userName: userName,
    message: message,
    data: expenseData
  });
}
