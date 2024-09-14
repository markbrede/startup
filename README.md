# startup

# AWS EC2 Instance Setup

## Overview
This guide walks you through creating and managing an EC2 instance on Amazon Web Services (AWS). An EC2 instance is a virtual server hosted in the cloud, which allows you to run applications without managing physical hardware.

## Steps

### 1. **Create an AWS EC2 Instance**
1. **Log in to AWS Console**: Open the AWS console in your browser and log in.
2. **Navigate to EC2**: Go to the EC2 service.
3. **Select Region**: Change the region to **US East (N. Virginia)** (`us-east-1`) to use the provided Amazon Machine Image (AMI).
4. **Launch Instance**: Click on **Launch instance**.
5. **Name Your Instance**: Provide a meaningful name following the format `[owner]-[purpose]-[version]`.
6. **Select AMI**: Use the AMI ID `ami-0b009f6c56cdd83ed`. Ensure you're in the correct region. 
7. **Choose Instance Type**: Select `t3.nano`, `t3.micro`, or `t2.micro` based on your needs and budget.
8. **Create Key Pair**: Generate a new key pair, and save it securely. This key will be required to SSH into your instance.
9. **Configure Network**: Enable auto-assign public IP. For the security group, create a new one if it's your first instance, allowing SSH, HTTP, and HTTPS traffic.
10. **Advanced Settings**: For `T3` instances, set Credit specification to **Unlimited** if desired.

### 2. **Access and Configure Your Instance**
1. **Launch Instance**: Click on **Launch instance**.
2. **Retrieve Public IP**: After the instance is running, copy the public IP address from the instance details.
3. **SSH into Server**: Use the following command to SSH into your server:
   ```sh
   ssh -i [key pair file] ubuntu@[ip address]
