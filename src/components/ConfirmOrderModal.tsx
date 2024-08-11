import { FaRegCheckCircle } from "react-icons/fa";
import { useModalStore } from "../stores/ModalStore";
import ConfirmOrderModalItem from "./ConfirmOrderModalItem";
import OrderTotal from "./OrderTotal";
import { useCartStore } from "../stores/CartStore";
import { Product } from "../interfaces/ProductModel";
const Modal = () => {
  const {cart} =  useCartStore()
  const { isModalOpen, setModalState } = useModalStore();
  if (!isModalOpen) return null;
  const onClose = () => setModalState(false);
  
  return (
    <div className="fixed inset-0 top-28 bg-black bg-opacity-60 flex md:justify-center md:bottom-20">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <button
          className="absolute top-2 right-2 text-black hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="container">
          <div className="flex flex-col items-start">
            <FaRegCheckCircle className="text-4xl text-Green mb-6" />
            <h2 className="text-5xl font-bold text-start mb-2">
              Order <br /> Confirmed
            </h2>
            <p className="text-sm text-Green">We hope you enjoyed your food!</p>

            {cart.map((item:Product) => (
              <ConfirmOrderModalItem key={item.id} item={item} />
            ))}
            
            <div>
            
            </div>
          </div>
          <OrderTotal state={false} />
        </div>
        <div className="container mt-2">
          <div className="flex justify-center py-4 px-8 rounded-full bg-Red hover:bg-red-500">
            <a className="text-white font-semibold">Start New Order</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
