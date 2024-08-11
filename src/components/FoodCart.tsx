import { useCartStore } from "../stores/CartStore"
import CartItem from "./CartItem"
import OrderTotal from "./OrderTotal"

const FoodCart = () => {
  const { cart } = useCartStore()

  // console.log(cart)
    const  cartLength = cart.length
    
  return (
    <>
    <section className="container bg-[#f5f5f5] px-6 py-6 rounded-md md:max-w-[30%] md:max-h-72">
        <div className="flex flex-col items-start justify-start space-y-3">
            <div className="">
                <h2 className="text-2xl font-bold text-Red">Your Cart ({cartLength})</h2>
            </div>

            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <OrderTotal state={true} />
        </div>
    </section>
    </>
  )
}


export default FoodCart