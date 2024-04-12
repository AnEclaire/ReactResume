# React JS Resume Website Template

![ReactJS Resume Website Template](resume-screenshot.jpg?raw=true 'ReactJS Resume Website Template')

This is a modified version of the React Resume V2.0 template by Tim Baker. 

This version has been set up for dockerization and is intended to be used deployed via command line.


To run project, inside the root of the project, once the website is set up and ready run:
docker build -t react-app:dev .
docker run -p 3000:3000 react-app:dev

If you'd prefer to run it detached to continue using the same terminal, you may run it detached and attach later. 
docker build -d -t react-app:dev .
docker run -p 3000:3000 react-app:dev