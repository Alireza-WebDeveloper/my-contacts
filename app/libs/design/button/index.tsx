interface ButtonProps {
  type: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  children,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
