interface ModalProps {
  label: string;
  onClick: () => void;
  children?: React.ReactNode;
}

const CustomButton: React.FC<ModalProps> = ({ onClick, label, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
    >
      {label}
      {children}
    </button>
  );
};

export default CustomButton;
