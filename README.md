# DAT037 course project - Website for Chalmers student union

This project aims to reproduce and upgrade the already existing site https://htek.se/. Htek is the website of a 
Chalmers student union and provides information about what the student union is up to. This includes contact 
information, information about the branches within the union, an event calendar, important documents and what to 
think of if you’ve been accepted to chalmers

# Building and accessing the website
To build the project you need to clone the project using the following command git clone
https://github.com/ShinzenATT/DAT076-project.git and afterwards you build the client folder and server folder 
by themselves. To be able to build you need to have Node.js and NPM installed on your system.

## Building Client
First you open a command line and navigate into the client folder (cd client). Then you need to install the 
project dependencies  with the command npm install --include=dev and then you can build with the command npm run 
build. Afterwards the files can be hosted like any other site using a tool like NGINX or Apache2 but if you want to 
preview the result then you can use the command npm run preview and then go to the url http://localhost:3000/ in your 
browser.

## Building Server
First you open a command line and navigate into the server folder (cd server). Then you need to set up a PostgreSQL 
database. It can be done by either downloading it from their web page and running the sever.sql found in the db folder 
with the command psql -f db/server.sql or you can use docker to setup a finished database that way with the command 
docker compose up. Afterwards you need to install the project dependencies  with the command npm install --include=dev 
and then you can build with the command npm run build. The finished project will then appear in a newly created dist 
directory where you can run the server by running the node command in the dist directory.

# Using the website
When entering the website then the user is greeted to a long landing page where the user can get an overview of the 
contents of the website by scrolling. Here the user can view the programs available in the division and click the 
icons to read further on Chalmers website.
Further down there’s a calendar which shows dots on days that contain events. When the user clicks on a day then it 
will show a pop up that shows the event details such as title, time and location.  
Afterwards come a preview of the available committees and student associations that the user can click on to read more.
Then there’s the navigation bar and footer which appears on every page. The navigation bar contains links to every 
page and every top level button opens a dropdown with additional links.
