# notes.md
**Notes.md, as the name implies, will be used for notes in CS260. these notes can be used on the midterm and final exam.**


**GitHub assignment NOTES:**

I have never used github before. I had no idea the level of ingenuity behind the repositories. I learned how to copy repositiories so that they can be moved to my computer as well as copied so that others can collaborate.

*

**Amazon Web Services - EC2 NOTES**

Server IP Address:
http://54.166.215.17

Command to Server:
ssh -i /Users/markbrede/Documents/docs/cs260/********.pem ubuntu@54.166.215.17



COMMAND: ➜  "ls -l

total 4

lrwxrwxrwx 1 ubuntu ubuntu   20 Apr 13 15:06 Caddyfile -> /etc/caddy/Caddyfile

lrwxrwxrwx 1 ubuntu ubuntu   16 Apr 13 15:06 public_html -> /usr/share/caddy

drwxrwxr-x 4 ubuntu ubuntu 4096 Apr 13 16:48 services"

*

***HTTPS, TLS, and web certificates NOTES***

domain name: autoexpensetracker.click *** https://autoexpensetracker.click/

*

**Purchasing a domain - Manage your DNS records**


Manage your DNS records
Now that you own a domain name you can use it to create DNS records that will map domain names to IP addresses (A records) or other domain names (CNAME records). For the purposes of this class, you want your root domain name, and any subdomain of your root domain, to map to the IP address of the web server you created previously.

You will need the public IP address for your server. You can get the public IP address by opening the AWS browser console and viewing the details of your server on the EC2 service page.

⚠ Note that the AWS browser console interface changes all the time; the directions below may not match exactly, but similar functionality should be there in some shape or form.
Navigate to the Route 53 service.
Select the Hosted zones option from the menu on the left.
You should see your domain name listed here. If it doesn't then the registration did not complete, or it is still pending. In that case go review the information found under Domains > Pending requests.
Click on your domain name to view the details. This should display existing DNS records with types such as NS, and SOA.
First, create the root domain DNS record. This will associate your domain name with your server's IP address and allow you to use your domain name in the browser to navigate to your server.
Press the Create record button.
In the Value box enter the public IP address of your server.
Press Create records
A new A type record should appear in your list of records that represents the root domain name and your server's public IP address.
Next we will create a DNS record that will map to your server for any subdomain of your root domain name. This is possible because DNS allows you to specify wildcards for a DNS record.
Press the Create record button.
In the Record name box enter the text *. This wildcard represents that any subdomain will match this record, so long as it is not explicitly defined by another DNS record.
In the Value box enter the public IP address of your server.
Press Create records
A new A type record should appear in your list of records that represents the wildcard subdomain name and your server's public IP address.

*

**Caddy**

Caddy
For our work we are using the web service Caddy to act as a gateway to our different services and to host our static web application files. Caddy has ACME support built into it by default, and so all you need to do is configure Caddy with the domain name for your web server. Here are the steps to take.

⚠ Note that this is one of the few modification that you will manually make to your web server. Most other production changes are completed with automated continuous integration processes.

Open a console window.

Use the ssh console program to shell into your production environment server.

➜  ssh -i [key pair file] ubuntu@[yourdomainnamehere]
for example,

➜  ssh -i ~/keys/production.pem ubuntu@myfunkychickens.click
Edit Caddy's configuration (Caddyfile) file found in the ubuntu user's home directory.

➜  cd ~
➜  vi Caddyfile
Modify the Caddy rule for handling requests to port 80 (HTTP), to instead handle request for your domain name. By not specifying a port the rule will serve up files using port 443 (HTTPS), and any request to port 80 will automatically redirect the browser to port 443. Replace :80 with your domain name (e.g. myfunkychickens.click). Make sure that you delete the colon.

Modify the Caddy rules that route the traffic for the two web applications that we will build. To do this replace the two places where yourdomain appears with your domain name (e.g. myfunkychickens.click).

Review the Caddyfile to make sure it looks right. If your domain name was myfunkychickens.click it would look like the following.

Save the file and exit VI (:wq)

Restart Caddy so that your changes take effect. Note that this requires you to use sudo (super user do) to elevate your user to have the rights to restart the gateway.

sudo service caddy restart
If you open your browser and navigate to your domain name you will now see that the browser is displaying a lock icon, using HTTPS, and your certificate has been automatically requested by Caddy and issued by Let's Encrypt.
