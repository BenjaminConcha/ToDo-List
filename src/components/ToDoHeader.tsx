type Props = {
  title: string;
};

const ToDoHeader = ({ title }: Props) => {
  return (
    <header>
      <h1 className="flex justify-center mt-5 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800">
        {title}
      </h1>
    </header>
  );
};

export default ToDoHeader;
