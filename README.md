# 🚀 Como empezar con `Strapi`

###  `Pre-requisitos`

version:
 ```
    node: 20.14.0
    npm: 10.7.0
 ```
`XAMPP:`
Estas pruebas se realizó en local con `Xampp`.

Pasos:
- Levantar puerto(port) 3306 para el MySQL.
- Generar una nueva base de datos en [phpMyAdmin](http://localhost/phpmyadmin/).
- configurar las variables de ambiente requeridas para la BD (.env) ejemplo en ".env.example".

### `Instalar dependencias`
```
    npm install
```

### `Creación de admin panel`
ejecutar el siguiente comando en la terminal de nodejs para crear el panel admin de strapi.

```
    npm run build
```

### `Ejecución de strapi en modo develop`
ejecutar el siguiente comando en la terminal de nodejs para levantar strapi en modo develop.

```
    npm run develop
```
al ejecutar el comando se abrira en el explorador para crear el usuario admin para el panel admin strapi.


Nota: 
* no olvidar sus credenciales de acceso sin ellas no puede hacer los ajustes strapi.
* las credenciales de user admin no son las mismas para iniciar sesión y ejecutar los endpoint que requieran de un JWT Token.

### `Creación de un nuevo usuario`
este servicio es requerido para crear un usuario que servira para el consumo de los servicios ya que requieren de un JWT Token.

cURL del servicio publico.
```
curl --location 'http://localhost:1337/api/auth/local/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "example@example.com",
    "username": "username",
    "password": "password"
}'
```

### `login usuario`
este servicio sirve para loguearse y obtener un token(JWT) para el consumo de los demas servicios.

Nota:
* el JWT tiene una `1 hora` de vencimiento.
cURL del servicio publico.

```
curl --location 'http://localhost:1337/api/auth/local' \
--header 'Content-Type: application/json' \
--data-raw '{
    "identifier": "gil4621@gmail.com",
    "password": "Admin123@"
}'
```

ejemplo de la respuesta del servicio login
```
{
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE4MzA5NjcxLCJleHAiOjE3MTgzMDk3MzF9.wnO5MfVGySAUIIRqOgXGz-_BDhMoLXiuKpYhl6HPetY",
    "user": {
        "id": 1,
        "username": "gil4621@gmail.com",
        "email": "gil4621@gmail.com",
        "provider": "local",
        "confirmed": false,
        "blocked": false,
        "createdAt": "2024-06-13T01:05:15.077Z",
        "updatedAt": "2024-06-13T01:05:15.077Z"
    }
}
```

strapi maneja el consumo de sus endpoint por roles, estos se pueden ver `users & permissions plugin`. Por defecto tiene dos tipos de roles(`Authenticated & Public`).
![alt text](.\src\extensions\complements\img\2024-06-13-170917.png)

los servicios que requieren de un JWT para su consumo estan en Authenticated, habilitar los siguientes endpoint que se ven en la imagen
![alt text](.\src\extensions\complements\img\2024-06-13-171435.png)

### `Lista de servicios`
---
* Endpoint hello
```
http://localhost:1337/api/hello
```

* Endpoint para listar todos los libros disponibles
```
http://localhost:1337/api/books
```

* Endpoint para listar todos los libros que sean mayores o igual al precio a buscar
```
http://localhost:1337/api/books?price=900
```

* Endpoint para buscar un libro por su ID
```
http://localhost:1337/api/books/3f43b000-d627-4d52-9007-61e090e9d8ae
```

* Endpoint para crear un nuevo libro(mysql)
```
http://localhost:1337/api/books
```
Body(required):
```
{
    "title": "Title",
    "year": 1968,
    "author": "Author"
}
```

* Endpoint para mostrar el promedio de los precios de los libros
```
http://localhost:1337/api/books/average
```