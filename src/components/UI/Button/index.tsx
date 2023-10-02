import Primary from "./Primary";
import Text from "./Text";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "text";
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  className = "",
  children,
  ...props
}: Props) => {
  if (variant === "primary") {
    return (
      <Primary {...props} className={className}>
        {children}
      </Primary>
    );
  }
  if (variant === "text") {
    return (
      <Text {...props} className={className}>
        {children}
      </Text>
    );
  }
};

export default Button;
