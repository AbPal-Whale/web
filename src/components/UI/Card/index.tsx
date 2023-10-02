import cx from "classnames";

interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div
      className={cx("rounded-xl shadow-md hover:shadow-2xl border bg-white")}
    >
      {children}
    </div>
  );
};

export default Card;
