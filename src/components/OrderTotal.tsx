import { FaTree } from "react-icons/fa6";
import ConfirmOrderButton from "./ConfirmOrderButton";
import { usePriceStore } from "../stores/PriceStore";


const OrderTotal = ({state}:{state: boolean}) => {
  const {totalPrice} = usePriceStore()
 
  return (
    <>
        <div className='container py-5'>
            <div className="flex justify-between">
                <p className='text-sm font-semibold'>Order Total</p>
                <h2 className="text-2xl font-bold text-black">${totalPrice}</h2>
            </div>
            
           {state && <><div className="flex justify-center items-center space-x-1 py-5">
                <FaTree className="" />
                <p className=" font-semibold">This is a carbon-neutral delivery</p>
            </div>
            <ConfirmOrderButton />
            </> 
          } 
          
        </div>
    </>
  )
}

export default OrderTotal