# Graphql

Este es un pequeño ejemplo de como crear y usar Graphql en un proyecto.

## Primeros pasos

Para poder empezar a ejecutar el proyecto podrias instalar las dependencias las cuales están descritas en el archivo `package.json`.

Para instalar las dependencias puedes usar:

```
npm install
```

O puedes usar el comando

```
yarn
```

## Ejecutando el proyecto

Para ejecutar el proyecto en desarrollo y poder hacer cambio tenemos el comando

```
npm run dev
```

Ejecutando esto vas a obtener una salida como la siguiente:

```
x npm run dev

> mre@1.0.0 dev
> tsnd --respawn ./src/index.ts

[INFO] 13:34:58 ts-node-dev ver. 1.1.8 (using ts-node ver. 9.1.1, typescript ver. 4.4.4)
Servidor en el puerto 3000
```

Ahora podrás modificar el servidor a tu antojo, para poder ejecutar el codigo de graphql puedes acceder a la ruta :

```
localhost:3000/graphql
```

## Ejemplos de graphql

Puedes ver los ejemplos que he redactado en el archivo `examples/person.md` donde están detallados algunos ejemplos que puedes usar con este prototipo inicial.
