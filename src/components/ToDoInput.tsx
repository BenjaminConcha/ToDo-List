type ToDoInputProps = {
  value: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
  placeholder: string;
};

const ToDoInput = ({
  value,
  onChange,
  onSubmit,
  placeholder,
}: ToDoInputProps) => (
  <div className="full flex flex-col sm:flex-row justify-center items-center p-10">
    <input
      className="w-full sm:w-3/4 lg:w-2/4 p-2 flex border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoFocus
    />
    <button
      className="m-5 p-2 flex flex-row items-center border bg-blue-500 text-white rounded-md hover:bg-blue-400 focus:outline-none"
      onClick={onSubmit}
    >
      Guardar
    </button>
  </div>
);

export default ToDoInput;
