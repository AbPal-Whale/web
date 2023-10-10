import typography from "@components/Typography";
import cx from "classnames";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Text = ({ className = "", children, ...props }: Props) => {
  return (
    <button
      {...props}
      className={cx(
        "w-fit cursor-pointer group relative flex gap-1.5 px-6 py-2 text-[#212529]",
        "rounded-lg border border-white hover:border-cornflower-blue-400 hover:bg-opacity-90",
        "transition font-semibold underline hover:no-underline",
        className,
        typography.button
      )}
    >
      <span className={typography.button}>{children}</span>
    </button>
  );
};

export default Text;
