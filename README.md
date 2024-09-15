# startup

# Elevator Pitch
Often the small expenses we spend on our vehicles go unaccounted for, leaving us underestimating the true cost of owning and maintaining our vehicles. My website, AutoExpenseTracker.com, is a simple yet powerful tool for vehicle owners to track and manage their automotive expenses. By creating an account, a user can easily log their vehicle's make and model, enter expenses like fuel, insurance, and maintenance, and have everything neatly organized in one place. With real-time cost calculations such as cost per mile and total vehicle expenses, users can make informed decisions on whether to maintain their current vehicle or invest in a new one. This website is appealing to a large number of people because it allows people to take control of their vehicle costs and optimize your financial decisions.

## Key Features of AutoExpenseTracker.com

1. **User Accounts**: Sign-up and login functionality with personalized expense tracking.
2. **Vehicle Cards**: Add and view vehicles, each with its own expense summary.
3. **Expense Tracking**: Log expenses (fuel, insurance, maintenance) and categorize them.
4. **Cost Calculations**: Automatic calculation of total cost, cost per mile, and category-specific expenses.
5. **Real-Time Data Sync**: Updates across devices using WebSockets.
6. **Third-Party API Integration**: Use external fuel price API for accurate fuel cost tracking.
7. **Responsive Design**: Optimized for all screen sizes with a clean interface.

## Originally I thought that everything was to be included on the "Rough Sketch." Because of this I have included the "Technology Uses" on the rough sketch seen below.





## EC2 Instance Setup and Management







# Summary

I've set up an AWS EC2 instance for my project. Here’s a detailed overview of the steps I followed:

### 1. **Creating the EC2 Instance**

- **Logged into AWS Console**: Accessed the AWS console and navigated to the EC2 service.
- **Set Region**: Changed the region to **US East (N. Virginia)** (`us-east-1`), ensuring compatibility with the AMI.
- **Launched Instance**: Clicked on **Launch instance**.
- **Named the Instance**: Used a naming convention `[owner]-[purpose]-[version]` for clarity.
- **Selected AMI**: Chose the AMI with ID `ami-0b009f6c56cdd83ed`, which includes Ubuntu, Node.js, NVM, Caddy Server, and PM2.
- **Picked Instance Type**: Opted for `t3.nano` (or `t3.micro`/`t2.micro` depending on requirements) to align

### 2. **Access and Configure Your Instance**
1. **Launch Instance**: Click on **Launch instance**.
2. **Retrieve Public IP**: After the instance is running, copy the public IP address from the instance details.
3. **SSH into Server**: Use the following command to SSH into your server:
   ```sh
   ssh -i [key pair file] ubuntu@[ip address]
