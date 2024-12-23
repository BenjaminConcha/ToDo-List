# ToDo List

Esta es una aplicación de lista de tareas creada con **React** y **TypeScript**. Permite a los usuarios agregar, editar, eliminar y marcar tareas como completadas, con animaciones suaves y persistencia de datos mediante `localStorage`.

## 🚀 Características

- **CRUD de tareas**: Crear, leer, actualizar y eliminar tareas.
- **Persistencia**: Las tareas se guardan en el navegador usando `localStorage`.
- **Interfaz moderna**: Estilo responsive con Tailwind CSS.
- **Animaciones**: Efectos de entrada y salida usando Framer Motion.

## 📦 Instalación

1. Clona el repositorio:
   git clone https://github.com/BenjaminConcha/ToDo-List.git

2. Navega por la terminal a:
   cd ToDo-List

3. Ejecuta el comando npm install

🛠️ Uso

1. Ejecuta el servidor de desarrollo:
npm run dev

2. Abre el navegador y visita:
http://localhost:5173

🏗️ Decisiones de diseño y arquitectura

Los componentes principales (ToDoHeader, ToDoInput, ToDoList, ToDoItem) están diseñados para ser reutilizables y manejan la lógica mínima.
La lógica central (manejo de estado, persistencia) se encuentra en un custom hook (useToDo).

Persistencia con localStorage:
Se utiliza localStorage para guardar las tareas localmente, asegurando que permanezcan entre sesiones del navegador.

Animaciones:
Se usó Framer Motion para lograr transiciones fluidas en la adición y eliminación de tareas, mejorando la experiencia del usuario.

Estilo responsive:
El diseño se implementó con Tailwind CSS, garantizando una visualización adecuada en dispositivos móviles y de escritorio.

TypeScript:
Todas las estructuras de datos (como Task) están fuertemente tipadas para evitar errores y mejorar la mantenibilidad.

📄 Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.






   
   

