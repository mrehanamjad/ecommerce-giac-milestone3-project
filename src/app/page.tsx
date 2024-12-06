import Container from "@/components/Container";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/productsData.json";
import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  return (
      <div className="w-full min-h-screen">
        <Hero />
        <ProductSection sectionTitle="Today's" sectionHeading="Flash Sales" btnText="View All Products">
           <div className="flex justify-between gap-3 overflow-x-scroll w-full py-4 sm:overflow-x-auto">
              {productsData.flashSale.map((product, index) => (
                <div key={index} className="">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
        </ProductSection>
        <ProductSection sectionTitle="Categories" sectionHeading="Browse By Category">
        <div className="flex justify-between gap-3 overflow-x-scroll w-full py-4 sm:overflow-x-auto">
              {productsData.categories.map((category) => (
                <div key={category.id} className="">
                  <CategoryCard {...category} />
                </div>
              ))}
            </div>
        </ProductSection>
      </div>
     

  );
}
