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
          "w-full max-w-[1480px] m-auto md:px-8 px-2 overflow-hidden",
          padding ? padding : "lg:py-36 md:py-28 py-20",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
