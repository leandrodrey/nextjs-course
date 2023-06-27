<div align="center"> 
  <img height="100px" src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" />
  
  <h1>NextJS Course from <a target="_blank" href="#">Udemy</a></h1>
</div>

# General information about projects
I will use one repository for all projects divided by folders.

- Project 1: /project1: NextJS with Typescript and Styled Components
- Project 2: /pokemon-static

# Create NextJS project using yarn
```bash
yarn create next-app
```

# How to run the app with Docker

## Create image of docker:
```bash
docker build -t nextjs-course .
```

## Run docker image:
```bash
docker run --name=nextjs-course -p 3000:3000 nextjs-course
```

## Run docker image in port 80:
```bash
docker run --name=nextjs-course -p 80:3000 nextjs-course
```
