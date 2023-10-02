import typography from "@components/Typography";
import cx from "classnames";

interface Props {
  title: string;
  className?: string;
}

const Title = ({ title, className }: Props) => {
  return (
    <h2 className={cx(typography.H2, "text-center", className)}>{title}</h2>
  );
};

export default Title;
