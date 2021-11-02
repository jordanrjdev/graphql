## GetPersons

Para obtener toda la lista de las personas puedes ejecutar el siguiente código de consulta de graphql:

```
query {
	getPersons {
	  name
	}
}
```

En el cual le especificamos que queremos obtener todas las personas y dentro de este objeto o bloque le decimos que propiedades queremos obtener de la lista de las personas en este caso hemos optado solo por obtener el nombre pero puedes usar propiedades como:

- id
- name
- age
- email

La respuesta de este código debería ser:

```
{
  "data": {
    "getPersons": [
      {
        "name": "John Doe"
      },
      {
        "name": "Jane Doe"
      }
    ]
  }
}
```

## FindPerson

Ahora usaremos el siguiente código de consulta de graphql para buscar una persona por su id y obtener su email, el código es el siguiente:

```
query {
	findPerson(id:1) {
  	email
  }
}
```

Aquí estamos pasando un parametro el cual es el id de la persona que queremos encontrar y dentro del bloque le decimos la propidad que podemos obtener en este caso el email de la persona.

Podemos ir jugando con las propiedades y si el id no existe nos devolverá un null en el findPerson.

Ejemplo de la respuesta cuando si existe el id:

```
{
  "data": {
    "findPerson": {
      "email": "john@correo.com"
    }
  }
}
```

Ahora veamos cual es la respuesta si no encontramos el id:

```
{
  "data": {
    "findPerson": null
  }
}
```

Hay que tener muy en cuenta que si la persona no existe nos traera un null en la raiz pero si la persona si existe pero no tiene un email la respuesta sera un null en el email.

```
{
  "data": {
    "findPerson": {
      "email": null
    }
  }
}
```
