"use client";

import Carousel from "@/components/Carousel";
import SectionWrapper from "@/components/SectionWrapper";
import Title from "@/components/Typography/SectionTitle";
import LinkButton from "@/components/UI/Button/Link";
import typography from "@components/Typography";
import dictionary from "@public/translate/products/es.json";
import cx from "classnames";

const Products = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-24">
        <Title title={dictionary.title} />
        <div className="flex flex-col gap-20">
          {dictionary.products.map((product, index) => (
            <div
              className={cx(
                "w-full gap-5 bg-white",
                index % 2 === 0
                  ? "flex lg:flex-row flex-col"
                  : "flex lg:flex-row-reverse flex-col"
              )}
              key={"product-" + index}
            >
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div className="p-5 flex flex-col gap-5 justify-center">
                  <p className={typography.H4}>{product.name}</p>
                  <p className={typography.H6}>{product.description}</p>
                </div>
                <div className="flex justify-end">
                  <LinkButton url="/" label={dictionary.download} />
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-5 my-auto">
                <Carousel slides={product.images} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Products;
