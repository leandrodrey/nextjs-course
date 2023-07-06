
# This is the first Project using NextJS

# How to run the app

If you want to see the project, you must follow the steps below:

1. Clone the repository

```bash
git clone https://github.com/leandrodrey/nextjs-course.git

```
2. Install the dependencies

```bash
cd project1
yarn install
```

3. Run the project
```bash
yarn dev
```
4. Open the browser in the address: http://localhost:3000

5. Enjoy!

# How to run the app with Docker

1. Run docker image:
```bash
docker run --name=nextjs-course -p 3000:3000 nextjs-course
```

2. Open the browser in the address: http://localhost:3000

3. Enjoy!

# Extra information

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