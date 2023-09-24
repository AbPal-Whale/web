interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className="rounded-xl shadow-md hover:shadow-2xl">{children}</div>
  );
};

export default Card;
