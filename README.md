# Dockerized Node JS Application

## Simple dockerized Node JS application

We will create a simple Node JS application and dockerize it. We will use the official Node JS image(alpine) from Docker Hub.You can find the official Node JS image [here](https://hub.docker.com/_/node).

### Prerequisites

- Docker installed on your machine. You can download Docker from [here](https://www.docker.com/products/docker-desktop).

### Steps

- Create docker image for Node JS application with the following command:

```bash
docker build -t nodejs-app .
```

After running the above command, it will create a docker image with the name `nodejs-app`. we can view the list of docker images with the following command:

```bash
docker images
```

- Run the docker container with the following command:

```bash
docker run -d -p 3000:3000 nodejs-app
```

It will run the docker container in detached mode and expose the port 3000. We can view the list of running docker containers with the following command:

```bash
docker container ps
```
