# Node Project

This is a simple Node.js project that runs a basic HTTP server.

## Technologies Used
- Language: JavaScript (Node.js)
- Container: Docker

## Prerequisites
- Docker installed
- Node.js installed locally

## Project Files
- **app.js**: Main file of the project.
- **Dockerfile**: Docker file for building the image.
- **package.json**: Contains project dependencies and scripts.


# Create image in Docker

 Execute it in the project directory.
 
  ~~~
  docker build -t itsandy/node_project .
  ~~~

## Run the Docker Container
~~~
docker run -p 3000:3000 itsandy/node_project
~~~

## Login in Docker Hub
~~~
Docker login
~~~

## Docker Desktop push in Docker Hub
~~~
docker push itsandy/node_project
~~~

## Node Image URL
~~~
https://hub.docker.com/r/itsandy/node_project
~~~


# RailWay
We log in and link to github to deploy the repositories.



  
