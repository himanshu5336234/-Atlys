interface ModalProps {
  label: string;
  onClick: () => void;
  children?: React.ReactNode;
}

const CustomButton: React.FC<ModalProps> = ({ onClick, label, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-8 py-2 text-sm text-white bg-[#4A96FF] rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
    >
      {label}
      {children}
    </button>
  );
};

export default CustomButton;
