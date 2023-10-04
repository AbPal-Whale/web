import SectionWrapper from "@/components/SectionWrapper";
import Title from "@/components/Typography/SectionTitle";
import Animated from "@/components/UI/Card/Animated";
import dictionary from "@public/translate/products/es.json";
import typography from "@components/Typography";
import cx from "classnames";

const Products = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-6">
        <Title title={dictionary.title} />
        <div className="flex flex-col gap-24">
          <p className={cx(typography.H6, "text-center")}>
            {dictionary.description}
          </p>
          <div className="grid grid-cols-3 gap-12">
            {dictionary.products.map((product, index) => (
              <Animated
                key={"product-" + index}
                image={product.image}
                name={product.name}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Products;
