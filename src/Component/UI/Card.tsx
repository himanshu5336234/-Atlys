interface CardProps {
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="p-4 flex flex-col gap-3 border border-borderColor bg-secondary rounded-lg shadow-md">
      {children}
    </div>
  );
};
export default Card;
