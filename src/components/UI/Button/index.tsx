import classNames from "classnames";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  className = "",
  children,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={classNames(
        variant === "primary"
          ? "bg-curious-blue-500 text-white hover:bg-curious-blue-600"
          : "bg-white text-curious-blue-500 border border-curious-blue-500",
        "hover:shadow-md",
        "px-6 py-3 rounded-md shadow-sm",
        "transition-all",
        "focus:ring-2",
        "focus:ring-offset-2",
        "focus:ring-offset-white",
        "focus:ring-curious-blue-700",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
