import { DeleteIcon } from "../icons/DeleteIcon";
import { EditIcon } from "../icons/EditIcon";
import { Task } from "../TaskTypes";

type Props = {
  task: Task;
  onToggleComplete: (selectedTask: string) => void;
  onDeleteTask: (selectedTask: string) => void;
  onEditTask: (selectedTask: string, newTask: string) => void;
};

const ToDoItem = ({
  task,
  onToggleComplete,
  onDeleteTask,
  onEditTask,
}: Props) => (
  <div className="w-full m-auto p-4 flex justify-between items-center space-x-2 border-b">
    <div className="flex items-center space-x-2">
      <input
        className="h-4 w-4 cursor-pointer"
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      <span
        className={`${task.completed ? "line-through text-slate-400" : ""}`}
      >
        {task.text}
      </span>
    </div>
    <div className="flex items-center space-x-2">
      <button onClick={() => onEditTask(task.id, task.text)}>
        {<EditIcon />}
      </button>
      <button onClick={() => onDeleteTask(task.id)}>{<DeleteIcon />}</button>
    </div>
  </div>
);

export default ToDoItem;
