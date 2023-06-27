<div align="center"> 
  <img widht="150px" height="150px" src="https://cdn.worldvectorlogo.com/logos/react-2.svg" />
  <h1>NextJS Course from <a target="_blank" href="#">Udemy</a></h1>
</div>

## General information about projects
I will use one repository for all projects.

## How to run the app with Docker

### Create image of docker:
```bash
docker build -t nextjs-course .
```

### Run docker image:
```bash
docker run --name=nextjs-course -p 3000:3000 nextjs-course
```

### Run docker image in port 80:
```bash
docker run --name=nextjs-course -p 80:3000 nextjs-course
```