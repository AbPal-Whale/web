import cx from "classnames";

interface Props {
  children: React.ReactNode;
  background?: string;
}

const SectionWrapper = ({ children, background }: Props) => {
  return (
    <section className={background}>
      <div className="w-full max-w-[1480px] m-auto py-36">{children}</div>
    </section>
  );
};

export default SectionWrapper;
