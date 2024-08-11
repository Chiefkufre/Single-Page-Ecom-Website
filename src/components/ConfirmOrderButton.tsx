import { useModalStore } from "../stores/ModalStore";

const ConfirmOrderButton = () => {
  const {setModalState} = useModalStore();
  const openModal = () => setModalState(true);
  return (
    <div className="container mt-2">
      <div onClick={openModal} className="flex justify-center py-4 px-8 rounded-full bg-Red hover:bg-red-500">
        <a className="text-white font-semibold">
          Confirm Order
        </a>
      </div>
    </div>
  );
};

export default ConfirmOrderButton;
