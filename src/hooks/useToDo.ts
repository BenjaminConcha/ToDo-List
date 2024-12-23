import { useEffect, useState } from "react";
import { Task } from "../TaskTypes";

const useToDo = () => {
  // Creacion del estado de las tareas y su almacenamiento en el localStorage
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // Creacion del estado para guardar una tarea, estado para el texto y la tarea a editar
  const [text, setText] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

  // useEffect para la permanencia de las tareas en el localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Funcion para agregar una tarea, o recibir el texto de la tarea a editar
  const handleSubmit = () => {
    if (text.trim()) {
      if (editingTaskId) {
        setTasks((prev) =>
          prev.map((task) =>
            task.id === editingTaskId ? { ...task, text } : task
          )
        );
        setEditingTaskId(null);
      } else {
        setTasks((prev) => [
          ...prev,
          { id: Date.now().toString(), text, completed: false },
        ]);
      }
      setText("");
    }
  };

  // Funcion para cambiar el estado de una tarea a completado o por completar

  const toggleCompletedTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Funcion para editar una tarea

  const handleEdit = (id: string) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      setText(task.text);
      setEditingTaskId(id);
    }
  };

  // Funcion para eliminar una tarea

  const deleteTask = (id: string): void => {
    const newTasks = tasks.filter((tasks) => tasks.id !== id);
    setTasks(newTasks);
  };

  // Retorno de los estados y funciones para utilziar en el componente App

  return {
    tasks,
    text,
    editingTaskId,
    setText,
    handleSubmit,
    toggleCompletedTask,
    handleEdit,
    deleteTask,
  };
};

export default useToDo;
