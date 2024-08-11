import { Link } from "react-router-dom";
import { useCartStore } from "../stores/CartStore";
const ItemPage = ({ item }: any) => {
  const {cart} = useCartStore();

  console.log(cart)
  return (
    <>
    <section className="flex flex-col justify-between">
    <div key={item.id}>
        <Link to="/">
          <h2 className="text-red-700 text-3xl">{item.name}</h2>
        </Link>
        <p>{item?.description}</p>
        <p>Price: {item?.price}</p>
        <p>{item?.quantity}</p>
        </div>
        <div>
        {/* <button onClick={handleAddToCart} className="bg-blue-700 text-white py-3 px-4 rounded-md hover:bg-blue-900">Add To cart</button> */}
      </div>
    </section>
      
    </>
  );
};

export default ItemPage;  