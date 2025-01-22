# API NodeJs con Express para la Gestión de Tareas

Este proyecto es una API REST construida con Node.js para gestionar tareas. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre un conjunto de tareas.

## Descripción

Esta API proporciona las siguientes funcionalidades:

- **GET /tasks**: Obtener todas las tareas.
- **POST /tasks**: Crear una nueva tarea.
- **PUT /tasks/:id**: Actualizar una tarea existente.
- **DELETE /tasks/:id**: Eliminar una tarea por su ID.

## Pre-requisitos

- Node.js y npm instalados en tu sistema.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone git@github.com:astronmy/api-express-example.git

2. Posicionate en el directorio del proyecto
    ```bash
    cd api-express-example

3. Instala las dependencias
    ```bash
    npm install
4. Inicia el servidor
    ```bash
    npm run dev

## Probar la API con Postman

### Paso 1: Descargar la Colección de Postman

Para facilitar la prueba de la API, hemos creado una colección de Postman que contiene todas las solicitudes necesarias para interactuar con los endpoints de nuestra API. Puedes encontrar la colección en el archivo `Modulo 4 API Express.postman_collection.json` dentro del directorio `resources/` de este proyecto.

1. Dirígete a la carpeta `resources/` en este proyecto.
2. Descarga el archivo `Modulo 4 API Express.postman_collection.json`.

### Paso 2: Importar la Colección en Postman

1. Abre **Postman** en tu computadora. Si no lo tienes instalado, puedes [descargarlo aquí](https://www.postman.com/downloads/).
2. Haz clic en el botón **Import** en la parte superior izquierda de la aplicación Postman.
3. Selecciona la opción **Upload Files**.
4. Navega a la carpeta `resources/` donde descargaste el archivo `Modulo 4 API Express.postman_collection.json` y selecciona ese archivo.
5. Postman importará automáticamente la colección y la mostrará en el panel izquierdo.

### Paso 3: Usar la Colección en Postman

Una vez que la colección esté importada, podrás ver las siguientes solicitudes dentro de la colección:

#### 1. **GET `/tasks`** - Obtener todas las Tareas

Esta solicitud te permite obtener todas las tareas almacenadas en el servidor. Cuando la ejecutes, deberías recibir una respuesta con todas las tareas.

**Ejemplo de Respuesta:**

```json
[
  {
    "id": 1,
    "title": "Tarea 1",
    "description": "Descripción de la tarea 1",
    "completed": false
  },
  {
    "id": 2,
    "title": "Tarea 2",
    "description": "Descripción de la tarea 2",
    "completed": true
  }
]
```
#### 2.**GET `/tasks/:id`** - Obtener una tarea específica

Este endpoint permite obtener una tarea por su `id`.

**Solicitud:**

- **Método**: `GET`
- **URL**: `/tasks/:id` (Reemplaza `:id` con el `id` de la tarea que deseas obtener)

```json
{
  "id": 1,
  "title": "Tarea de ejemplo",
  "description": "Descripción de la tarea de ejemplo",
  "completed": false
}
```

#### 3. **POST `/tasks`** - Crear Tarea

Este endpoint permite crear una nueva tarea. Debes enviar un cuerpo JSON con los campos `title`, `description`, y opcionalmente `completed`.

**Solicitud:**

- **Método**: `POST`
- **URL**: `/tasks`
- **Cuerpo de la solicitud (JSON)**:

```json
{
  "title": "Nueva tarea",
  "description": "Descripción de la tarea",
  "completed": false
}
```

#### 4. **PUT `/tasks/:id`** - Actualizar o Crear una Tarea

Este endpoint permite actualizar una tarea por su `id`. Debes enviar un cuerpo JSON con los campos `title`, `description`, y opcionalmente `completed`.

**Solicitud:**

- **Método**: `PUT`
- **URL**: `/tasks/:id` (Reemplaza `:id` con el `id` de la tarea que deseas actualizar)
- **Cuerpo de la solicitud (JSON)**:

```json
{
  "title": "Tarea actualizada",
  "description": "Descripción actualizada",
  "completed": true
}
```

#### 5. **DELETE `/tasks/:id`** - Eliminar una tarea

Este endpoint permite eliminar una tarea por su `id`. No es necesario enviar un cuerpo en la solicitud.

**Solicitud:**

- **Método**: `DELETE`
- **URL**: `/tasks/:id` (Reemplaza `:id` con el `id` de la tarea que deseas eliminar)

**Respuestas:**

- **Código 200 - OK**: Si la tarea se ha eliminado correctamente, recibirás una respuesta con un mensaje de éxito.

```json
{
  "message": "Tarea eliminada con éxito"
}
```