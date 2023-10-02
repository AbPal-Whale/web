import cx from "classnames";
interface Props {
  children: React.ReactNode;
  background?: string;
  className?: string;
  padding?: string;
}

const SectionWrapper = ({
  children,
  background,
  className,
  padding,
}: Props) => {
  return (
    <section className={background}>
      <div
        className={cx(
          "w-full max-w-[1480px] m-auto",
          padding ? padding : "py-36",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
