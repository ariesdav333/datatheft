# Data Theft - Data Visualisation

## Overview
This will display a web application about hacking and the data visualisation section will display charts of different types of intrusions which will be dsiplayed visually.

## What is this app for?

This will just display data of breaches that happened from 2013 to 2016 and show it in a visual representation which will displayed in a visual way taking data from .csv file and will poukate the data.
 
## How to use the application 


 
## Features

### Features to be implemented
- The front end will use standard boilerplate HTML, Javascript and the routing will be controlled by the Flask Framework.


 
## Tech Used
### Some tech used includes:
- Will use Python(Flask) a micro framwork as the structure of the website with basic routing links. It will use templates to create a
seperation of concerns for each page as best practice in order to keep the code clean from the Front end and Back End.
- CSS will be used for the web of the web pages.
- Data will be used from a .csv file and the database used to extract the data will be MongoDB. D3.js & Crossfilter.js to display the data in a various charting formats to visualise the data in realtime.
 
## Deployment
This will be deployed to my local Github Repo and aalso pushed to a hosting site called "Heroku"

##Installation
For the developer to get the code up and running please follow the steps below:
- You will need to have python installed on your system this application uses 2.7 
- From here you will need to download https://github.com/ariesdav333/datatheft from this location and unzip into a directory of your choice.
(Specific for Windows users - Linux users will need to follow the steps for this from the website)
- If you have not got MongoDB installed this will need to be downloaded. If you visit https://www.mongodb.com/download-center#production and download the community server edition and this will bw installed on to your computer. (You’ll find that the software has been added to c:\program files\MongoDB)
- It’s recommended to add $MongoDB/bin to the PATH environment variable, so that you can access the MongoDB’s commands in the command prompt easily.
(To set variables in Windows 8 and Windows 10:)
From the Desktop, right-click the very bottom left corner of the screen to get the Power User Task Menu.
From the Power User Task Menu, click System.
Click the Advanced system settings link in the left column, then click the Environment Variables button near the bottom of that tab.
To edit the ‘User variables for user’ click on Path and then click the ‘Edit…’ button. In the ‘Edit Environment Variable’ window click the ‘New’ button and paste the root in. You can copy this from the file explorer (it will be similar to: C:\Program Files\MongoDB\Server\3.4\bin).
- The command we will use most often is mongod.exe. This command runs an instance of MongoDB on a local server and allows access to your data.  
- If you are using Windows 7 or 8, run the command prompt in administrator mode in order to run mongod.
- Enter the command below to set up your server: mongod --dbpath c:\mongodata\data --port 27017
- One you hit enter it will run the built in server and you will see something like this which will open up the connection 
"2015-10-20T13:55:34.617+0100 I NETWORK  [initandlisten] waiting for connections on port 27017"



## Developer
This is being designed and developed by <b> David Williams </b> 2018
