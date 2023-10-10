import Button from "@components/UI/Button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Props {
  url: string;
  label: string;
}

const LinkButton = ({ url, label }: Props) => {
  return (
    <Link href={url} target="_blank" className="pt-14">
      <Button variant="text" className="group">
        <span className="flex justify-center items-center gap-3">
          {label}
          <div className="rounded-full hover:shadow-md group-hover:text-cornflower-blue-500">
            <ArrowRightIcon />
          </div>
        </span>
      </Button>
    </Link>
  );
};

export default LinkButton;
