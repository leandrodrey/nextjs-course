

# Docker

Crear imagen de docker:
```bash
docker build -t nextjs-course .
```

Correr imagen de docker:
```bash
docker run --name=nextjs-course -p 3000:3000 nextjs-course
```

```bash
docker run --name=nextjs-course -p 80:3000 nextjs-course
```