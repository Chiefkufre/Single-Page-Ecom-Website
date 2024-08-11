import { Watch } from "react-loader-spinner";

const Spinner = ({state} : {state: boolean}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <Watch  
          visible={state}
          height="80"
          width="80"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </>
  );
};

export default Spinner;
