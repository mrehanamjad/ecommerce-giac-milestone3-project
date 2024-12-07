import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/productsData.json";
import CategoryCard from "@/components/CategoryCard";
import MusicProductSection from "@/components/MusicProductSection";
import FeaturedProductCard from "@/components/FeaturedProductCard";
import ServiceSection from "@/components/ServiceSection";

export default function Home() {
  return (
      <div className="w-full min-h-screen pb-14">
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
        <ProductSection sectionTitle="This Month" sectionHeading="Best Selling Products" btnText="View All" topRight="btn">
           <div className="flex justify-between gap-3 overflow-x-scroll w-full py-4 sm:overflow-x-auto">
              {productsData.bestSellingProducts.map((product, index) => (
                <div key={index} className="">
                  <ProductCard {...product}  />
                </div>
              ))}
            </div>
        </ProductSection>

              <MusicProductSection />

              <ProductSection sectionTitle="This Month" sectionHeading="Best Selling Products" btnText="View All Products" >
           <div className="flex justify-between  overflow-x-scroll w-full py-4 sm:overflow-x-auto">
            <div>
              <div className="flex gap-3 justify-between items-center">
              {productsData.exploreOurProducts1.map((product, index) => (
                <div key={index} className="">
                  <ProductCard {...product}  />
                </div>
              ))}
              </div>
              <div className="flex gap-3 justify-between items-center mt-4">
              {productsData.exploreOurProducts2.map((product, index) => (
                <div key={index} className="">
                  <ProductCard {...product}  />
                </div>
              ))}
              </div>
              </div>
            </div>
        </ProductSection>
             
        <ProductSection sectionTitle="Featured" sectionHeading="New Arrival" topRight="btn">
           <div className="w-full h-[37.5rem] gap-6 py-4 grid grid-cols-4 lg:grid-rows-2">
              <div className="w-full h-full col-span-4 sm:col-span-2 lg:row-span-2">
                <FeaturedProductCard {...productsData.featured[0]} />
              </div>
              <div className="w-full h-full col-span-4 sm:col-span-2 lg:row-span-1 bg-blue-300">
                <FeaturedProductCard {...productsData.featured[1]} />
              </div>
              <div className="w-full h-full col-span-4 lg:col-span-1 lg:row-span-1 bg-yellow-400">
                <FeaturedProductCard {...productsData.featured[2]} />
              </div>
              <div className="w-full h-full col-span-4 lg:col-span-1 lg:row-span-1 bg-orange-500">
                <FeaturedProductCard {...productsData.featured[3]} />
              </div>
            </div>
        </ProductSection>
              <ServiceSection />
      </div>
     

  );
}
