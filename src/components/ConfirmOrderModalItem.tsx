import { Product } from "../interfaces/ProductModel";
import { useCartStore } from "../stores/CartStore";
import ResponsiveImage from "./ResponsiveImage";

const ConfirmOrderModalItem = ({ item }: { item: Product }) => {
  
  const {cart} = useCartStore();
  const cartItem = cart.find(cartItem => cartItem.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 1;
  const singlePrice = Number(item.price);
  const totalPricePerItem = singlePrice * quantity;


  return (
    <div className="container bg-Rose100 my-2">
      <div className="flex justify-between py-2 px-4">
      <ResponsiveImage source={item!.imgUrl} className="h-16 w-16" />

        <div className="flex flex-col items-start justify-start space-y-1">
          <div className="flex items-center justify-between w-full">
            <p className="font-semibold text-black text-start">{item.name}</p>
          </div>
          <div className="flex text-start space-x-2 my-2 ">
            <h4 className="font-semibold text-Red">{quantity}x</h4>
            <h4 className="font-semibold text-Green">@ ${singlePrice}</h4>
          </div>
        </div>
        <h4 className="font-bold text-black">${totalPricePerItem}</h4>
      </div>
    </div>
  );
};

export default ConfirmOrderModalItem;
