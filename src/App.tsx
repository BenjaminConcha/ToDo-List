import "./App.css";
import ToDoHeader from "./components/ToDoHeader";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import useToDo from "./hooks/useToDo";

function App() {
  const {
    tasks,
    text,
    setText,
    handleSubmit,
    toggleCompletedTask,
    handleEdit,
    deleteTask,
  } = useToDo();

  return (
    <>
      <header>
        <ToDoHeader title="To-Do List" />
      </header>
      <div>
        <ToDoInput
          value={text}
          onChange={setText}
          onSubmit={handleSubmit}
          placeholder="Agrega una tarea"
        />
        <ToDoList
          tasks={tasks}
          onToggleComplete={toggleCompletedTask}
          onDeleteTask={deleteTask}
          onEditTask={handleEdit}
        />
      </div>
    </>
  );
}

export default App;
