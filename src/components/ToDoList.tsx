import { Task } from "../TaskTypes";
import ToDoItem from "./ToDoItem";
import { motion, AnimatePresence } from "framer-motion";

type ToDoListProps = {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onEditTask: (id: string, newTask: string) => void;
};

const ToDoList: React.FC<ToDoListProps> = ({
  tasks,
  onToggleComplete,
  onDeleteTask,
  onEditTask,
}) => {
  return (
    <ul className="w-full sm:w-3/4 lg:w-3/4 m-auto mb-5 flex flex-col border border-gray-300 rounded-md shadow-xl">
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.li
            key={task.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <ToDoItem
              task={task}
              onToggleComplete={onToggleComplete}
              onDeleteTask={onDeleteTask}
              onEditTask={onEditTask}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default ToDoList;
