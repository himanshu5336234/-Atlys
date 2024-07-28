import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div  className="fixed inset-0 bg-primary bg-opacity-60  flex items-center justify-center">
      <div className="absolute border-solid border-2  max-w-lg w-full p-8 bg-secondary border border-borderColor rounded-lg shadow-md max-w-sm mx-auto">
        <button
          className="absolute top-2 px-[10px] py-[5px] bg-black rounded-full right-2 text-gray-400 hover:text-gray-200"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
      </div>
  );
};

export default CustomModal;
