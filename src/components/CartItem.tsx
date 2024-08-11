import { FaRegCircleXmark, FaPlus, FaMinus } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useCartStore } from "../stores/CartStore";
import { Product } from "../interfaces/ProductModel";
import { usePriceStore } from "../stores/PriceStore";

const CartItem = ({ item }: { item: Product }) => {
  let { setTotalPrice, subtractFromTotalPrice } = usePriceStore();

  let { updateItemQuantity, removeFromCart, cart } = useCartStore();

  const cartItem = cart.find((cartItem) => cartItem.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 1;

  const doublePrice = quantity * Number(item.price);

  function increaseQuantity(): void {
    const newQuantity = quantity + 1;
    updateItemQuantity(item.id, newQuantity);
    setTotalPrice(Number(item.price));
  }

  function decreaseQuantity(): void {
    if(quantity === 1){
      toast.warning("Item can not be less than 1 in cart");
    }
    if (quantity > 1) {
      updateItemQuantity(item.id, quantity - 1);
      subtractFromTotalPrice(Number(item.price));
    }
  }

  function deleteCartItem(itemId: number): void {
    const cartItem = cart.find((item) => item.id === itemId);
    if (cartItem) {
      subtractFromTotalPrice(cartItem.quantity * Number(cartItem.price));
    }
    removeFromCart(itemId);
    toast.success("Item removed successfully");
  }
  return (
    <>
      <div className="container py-2 border-solid border-b-2 border-Rose100">
        <div className="flex flex-col items-start justify-start space-y-1">
          <div className="flex items-center justify-between w-full">
            <p className="font-semibold text-black text-start text-ellipsis">
              {item?.name}
            </p>
            <FaRegCircleXmark
              onClick={() => deleteCartItem(item!.id)}
              className="ml-auto text-Rose400 text-xl hover:text-Rose500"
            />
          </div>
          <div className="flex text-start space-x-2 my-2 ">
            <h4 className="font-semibold text-Red">{quantity}x</h4>
            <h4 className="font-semibold text-Rose300">@ ${item?.price}</h4>
            <h4
              className="font-semibold text-Rose400"
              style={{ width: "80px", textAlign: "left" }}
            >
              ${doublePrice}
            </h4>
            <div className="flex justify-between space-x-3 items-center">
              <h4 onClick={decreaseQuantity} className="text-Red">
                <FaMinus className="text-sm" />
              </h4>
              <h4
                onClick={increaseQuantity}
                className=" text-blue-500 text-2xl"
              >
                <FaPlus className="text-sm" />
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
