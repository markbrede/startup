# startup

# EC2 Instance Setup and Management

## Summary

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
