import classnames from "classnames";

interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div
      className={classnames(
        "rounded-xl shadow-md hover:shadow-2xl border bg-white"
      )}
    >
      {children}
    </div>
  );
};

export default Card;
