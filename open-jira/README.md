
# Next.js Open Jira
Para correr localmente, se necesita la base datos

```bash
docker-compose up -d
```

* El -d es para que corra en segundo plano

* MongoDB URL Local:
```bash
mongodb://localhost:27017
```

# Variables de entorno

* Renombrar el archivo .env.example y agregar las variables de entorno

* Variable de entorno pública en Next:
```JSX
NEXT_PUBLIC_CLIENT_KEY= ASFAFD@#123
```
# Reconstruir los módulos de Node y levantar Next
```bash
yarn install
yarn dev
```

## Llenar la base de datos con información de pruebas
```bash
localhost:3000/api/seed
```