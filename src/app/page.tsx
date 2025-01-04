import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import MusicProductSection from "@/components/MusicProductSection";
import FeaturedProductCard from "@/components/FeaturedProductCard";
import ServiceSection from "@/components/ServiceSection";
import { ProductI } from "@/lib/types";

const fetchProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products");
    const data = await res.json();
    return data.products;
  } catch (error:any) {
    console.log("error: " , error.message);
  }
}

  const categories = [
        {
            "id": 1,
            "name": "Phones",
            "imgSrc": "/icons/Category-CellPhone.svg"
        },
        {
            "id": 2,
            "name": "Computers",
            "imgSrc": "/icons/Category-Computer.svg"
        },
        {
            "id": 3,
            "name": "SmartWatch",
            "imgSrc": "/icons/Category-SmartWatch.svg"
        },
        {
            "id": 4,
            "name": "Camera",
            "imgSrc": "/icons/Category-Camera.svg"
        },
        {
            "id": 5,
            "name": "HeadPhones",
            "imgSrc": "/icons/Category-Headphone.svg"
        },
      
        {
            "id": 6,
            "name": "Gaming",
            "imgSrc": "/icons/Category-Gamepad.svg"
        }
    ]

 const Home = async () => {
 

  const products: ProductI[] = await fetchProducts();
  

  const flashSale = products.slice(0, 4);
  const bestSellingProducts = products.slice(4, 8);
  const exploreOurProducts1 = products.slice(8, 12);
  const exploreOurProducts2 = products.slice(12, 16);
  const featured = products.slice(16, 20);


  return (
      <div className="w-full min-h-screen pb-14">
        <Hero />
        <ProductSection sectionTitle="Today's" sectionHeading="Flash Sales" btnText="View All Products">
           <div className="flex justify-between gap-3 overflow-x-scroll w-full py-4 sm:overflow-x-auto">
              {flashSale.map((product, index) => (
                <div key={index} className="">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
        </ProductSection>
        <ProductSection sectionTitle="Categories" sectionHeading="Browse By Category">
        <div className="flex justify-between gap-3 overflow-x-scroll w-full py-4 sm:overflow-x-auto">
              {categories.map((category) => (
                <div key={category.id} className="">
                  <CategoryCard {...category} />
                </div>
              ))}
            </div>
        </ProductSection>
        <ProductSection sectionTitle="This Month" sectionHeading="Best Selling Products" btnText="View All" topRight="btn">
           <div className="flex justify-between gap-3 overflow-x-scroll w-full py-4 sm:overflow-x-auto">
              {bestSellingProducts.map((product, index) => (
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
              {exploreOurProducts1.map((product, index) => (
                <div key={index} className="">
                  <ProductCard {...product}  />
                </div>
              ))}
              </div>
              <div className="flex gap-3 justify-between items-center mt-4">
              {exploreOurProducts2.map((product, index) => (
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
                <FeaturedProductCard {...featured[0]} />
              </div>
              <div className="w-full h-full col-span-4 sm:col-span-2 lg:row-span-1 bg-blue-300">
                <FeaturedProductCard {...featured[1]} />
              </div>
              <div className="w-full h-full col-span-4 lg:col-span-1 lg:row-span-1 bg-yellow-400">
                <FeaturedProductCard {...featured[2]} />
              </div>
              <div className="w-full h-full col-span-4 lg:col-span-1 lg:row-span-1 bg-orange-500">
                <FeaturedProductCard {...featured[3]} />
              </div>
            </div>
        </ProductSection>
              <ServiceSection />
      </div>
  );
}

export default Home