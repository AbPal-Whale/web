import typography from "@components/Typography";
import cx from "classnames";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Primary = ({ className = "", children, ...props }: Props) => {
  return (
    <button
      {...props}
      className={cx(
        "cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-cornflower-blue-500 disabled:bg-slate-500",
        "text-white rounded-lg hover:bg-opacity-90 transition font-semibold shadow-md",
        typography.button,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Primary;
