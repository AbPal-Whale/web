import typography from "@/components/Typography";
import Button from "@/components/UI/Button";
import dictionary from "@public/translate/not-found/es.json";
import cx from "classnames";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-[80vh] flex">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <h5 className={cx(typography.H2)}>{dictionary.title}</h5>
          <h6 className={cx("pt-4", typography.H5)}>{dictionary.subtitle}</h6>
          <p className={cx("pt-5", typography.body)}>
            {dictionary.description}
          </p>
          <Link href="/" className="pt-14">
            <Button variant="primary">{dictionary.action}</Button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center bg-[#C4DEFD]"></div>
    </div>
  );
};

export default NotFound;
