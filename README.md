### Todo List - Backend 


## Installation

```
npm install
```

## Usage

```
npm run dev
```

Simple todo list app using node and express.
Dado la simplicidad del proyecto, no se ha utilizado ninguna base de datos, por lo que los datos se almacenan en un array en memoria.

La documentacion planteaba 6 routes, pero se ha añadido una mas para que pueda ser posible completar la tarea.

Se hace entrega de un archivo postman para poder probar las rutas.



Soy consciente que se puede usar otras herramientas como typescript, pero no he querido sobrecargar el proyecto, siempre me planteo que tecnologias usar en funcion de la complejidad del proyecto. En caso de hacer un proyecto mas grande, si que usaria typescript, haria  test unitarios y e2e pero en este caso no lo he visto necesario. Una mejor implementacion seria el framework Nest que ya viene configurado con typescript y muchas mas herramientas, inyeccion de depencias, swagger para documentacion, validadores, pipes, etc. Pero como he dicho, no he querido sobrecargar el proyecto.