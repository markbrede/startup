const { WebSocketServer } = require('ws');

//handle WebSocket connections and send update messages between users on the same account
class PeerProxy {
  constructor(httpServer) {
    //make a websoc server that shares the http server
    this.wss = new WebSocketServer({ noServer: true });

    this.connections = [];
    
    //protocol from http to websoc
    httpServer.on('upgrade', (request, socket, head) => {
      this.wss.handleUpgrade(request, socket, head, (ws) => {
        this.wss.emit('connection', ws, request);
      });
    });

    this.wss.on('connection', (ws) => {
      this.connections.push(ws); //new connections
      console.log('client connected', this.connections.length); 

      //set up connection handlers
      ws.on('message', (data) => {
        this.connections.forEach((client) => {
          if (client !== ws && client.readyState === 1) {
            client.send(data.toString()); //forward to other c;ients
          }
        });
      });

      //diconnections
      ws.on('close', () => {
        this.connections = this.connections.filter((connection) => connection !== ws);
        console.log('Client disconnected', this.connections.length);
      });

      //errors
      ws.on('error', (error) => {
        console.error('WebSocket error:', error);
      });

      //welcome message for new connection
      ws.send(JSON.stringify({ type: 'system', message: 'You are connected to the Auto Expense Tracker websocket server' }));
    });

    //maintaining connection with ping interval
    setInterval(() => {
      this.connections.forEach((ws) => {
        if (ws.readyState === 1) {
          ws.ping();
        }
      });
    }, 30000);
  }
}

module.exports = { PeerProxy };
