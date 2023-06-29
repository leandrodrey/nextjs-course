<div align="center"> 
  <img height="100px" src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" />
  
  <h1>Next.JS Course from <a target="_blank" href="http://www.udemy.com/course/nextjs-fh/">Udemy</a></h1>
</div>

# General information about projects
I will use one repository for all projects divided by folders.

## 1. Project 1: /project1
* Basic NextJS
* Typescript
* Styled Components
* NextJS Router
* Docker

## 2. Project 2: /pokemon-static
* [Next UI](https://nextui.org/)
* Local Storage
* Static Generation - GetStaticProps and GetStaticPaths
* Incremental Static Regeneration

## 3. Project 3: /open-jira
* [Material UI](https://material-ui.com/)

# Useful information

## Create NextJS project using yarn
```bash
yarn create next-app
```

## Using Docker

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

## Using Next UI
- https://nextui.org/docs/guide/getting-started
```bash
yarn add @nextui-org/react
```