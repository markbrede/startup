# startup


## Sep 17 2024 - ELEVATOR PITCH
Often the small expenses we spend on our vehicles go unaccounted for, leaving us underestimating the true cost of owning and maintaining our vehicles. My website, AutoExpenseTracker.com, is a simple yet powerful tool for vehicle owners to track and manage their automotive expenses. By creating an account, a user can easily log their vehicle's make and model, enter expenses like fuel, insurance, and maintenance, and have everything neatly organized in one place. With real-time cost calculations such as cost per mile and total vehicle expenses, users can make informed decisions on whether to maintain their current vehicle or invest in a new one. This website is appealing to a large number of people because it allows people to take control of their vehicle costs and optimize your financial decisions.





## Sep 14 2024 - KEY FEATURES OF AutoExpenseTracker.com
1. **User Accounts**: Sign-up and login functionality with personalized expense tracking.
2. **Vehicle Cards**: Add and view vehicles, each with its own expense summary.
3. **Expense Tracking**: Log expenses (fuel, insurance, maintenance) and categorize them.
4. **Cost Calculations**: Automatic calculation of total cost, cost per mile, and category-specific expenses.
5. **Real-Time Data Sync**: Updates across devices using WebSockets.
6. **Third-Party API Integration**: Use external fuel price API for accurate fuel cost tracking.
7. **Responsive Design**: Optimized for all screen sizes with a clean interface.

I have included the "Technology Uses" on the rough sketch seen below.
![IMG_0049](https://github.com/user-attachments/assets/17a30bf6-d135-4848-a870-41eef1967cad)




## Sep 17 2024 - EC2
**I created the EC2 Instance**
- **Named the Instance marks260webserver**
- **Choose t2.micro for the instance type (May need to change this later**
**Accessed and Configured the Instance**
**SSH into Server Using:**
   ssh -i [my key pair file] ubuntu@3.216.217.181




## Sep 24 2024 - HTTPS
**Secured Web Server Communication with HTTPS**
- Modified Caddyfile:
- Replaced `:80` with my domain name `AutoExpenseTracker.click`.
- Restarted Caddy to apply changes:



## Oct 02 2024 - HTML & CodePen
**Completed HTML Structure, Input, and Media**
- Familiarized myself with CodePen.
- 
