import { Product } from "../interfaces/ProductModel";
import AddToCartButton from "./AddToCartButton";
import ResponsiveImage from "./ResponsiveImage";

const FoodCard = ({ item }: { item?: Product }) => {
  return (
    <>
      <section className="container md:basis-1/4 md:max-w-[30%]">
        <div className="flex flex-col">
          <div className="container flex flex-col ">
            <div className="relative">
              <ResponsiveImage
                source={item!.imgUrl}
                className="h-full w-full object-cover rounded-2xl hover:border-solid hover:border-4 
                hover:border-red-500"/>
              <AddToCartButton item={item!} />
            </div>
          </div>
          <div className="flex flex-col text-start space-y-1 my-10">
            <p className="text-md text-Rose300" id="name">
              {item?.name}
            </p>
            <p className="text-xl font-semibold text-dark" id="category">
              {item?.category}
            </p>
            <p className="text-xl font-semibold text-Red" id="price">
              ${item?.price}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodCard;
