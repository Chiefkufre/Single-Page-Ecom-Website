import { FaCartPlus } from "react-icons/fa6";
import { Product } from "../interfaces/ProductModel";
import { useCartStore } from "../stores/CartStore";
import { toast } from "react-toastify";
import { usePriceStore } from "../stores/PriceStore";

const AddToCartButton = ({item}:{item:Product}) => {
  let {setTotalPrice} = usePriceStore();

  const {addToCart} = useCartStore()
  const itemPrice = Number(item.price);

  
  function handleAddToCart(): void{
    addToCart(item)
    setTotalPrice(itemPrice)
    toast.success('item added to cart')
  }
  return (
    <>
        <div onClick={handleAddToCart} className="absolute bottom-0 left-1/2 transform 
              -translate-x-1/2 translate-y-1/2 w-[50%]
              flex items-center justify-center bg-white px-2 py-2
               rounded-3xl border-solid border-2 
               border-Rose400 space-x-2 hover:text-white hover:bg-Red hover:border-Red md:w-36">
                <FaCartPlus className="text-xl" />
                <a className="text-black font-semibold hover:text-white">
                  Add to Cart
                </a>
              </div>
    </>
  )
}

export default AddToCartButton