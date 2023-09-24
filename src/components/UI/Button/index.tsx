import classNames from "classnames";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const Button = ({ variant = "primary", children, ...props }: Props) => {
  return (
    <button
      {...props}
      className={classNames(
        variant === "primary"
          ? "bg-curious-blue-500 text-white hover:bg-curious-blue-600"
          : "bg-white text-curious-blue-500 border-curious-blue-500",
        "px-6 py-3 rounded-md",
        "focus:ring-2",
        "focus:ring-offset-2",
        "focus:ring-offset-white",
        "focus:ring-curious-blue-700",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
