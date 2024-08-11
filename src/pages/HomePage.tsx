import { useQuery } from "@tanstack/react-query";
import { fetchAllItems } from "../services/Service";
import { usePaginationStore } from "../stores/PaginationStore";
import FoodCard from "../components/FoodCard";
import FoodCart from "../components/FoodCart";
import Modal from "../components/ConfirmOrderModal";
import Spinner from "../components/Spinner";
import { Product } from "../interfaces/ProductModel";
const HomePage = () => {
  const { page } = usePaginationStore();

  
  const { isSuccess, isLoading, isError, data, error } = useQuery({
    queryKey: [page],
    queryFn: () => fetchAllItems(page),
  });

  // function handlePagination(pageNumber: number) {
  //   if (pageNumber > 0 && pageNumber < 4) {
  //     setPage(pageNumber);
  //   }
  // }
  return (
    <>
      {isLoading && <Spinner state={!isLoading} />}
      {isError && <h1>{error?.message}</h1>}

      {isSuccess && (
        <main className="md:flex md:space-x-1">
          <div className="container flex-wrap md:flex md:space-x-3">
          {data.results.map((item: Product) => (
            <FoodCard key={item.id} item={item}/>
          ))}
          </div>
          <FoodCart />
           <Modal />
        </main>
      )}
      {/* {isSuccess && <FoodCart /> } */}
    </>
  );
};

export default HomePage;
