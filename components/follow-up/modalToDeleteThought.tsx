interface ModalToDeleteThoughtProps {
  setModalToDeleteThought: React.Dispatch<React.SetStateAction<boolean>>;
  modalToDeleteThought: boolean;
  handleDeleteThought: () => void;
}

const ModalToDeleteThought = ({
  setModalToDeleteThought,
  modalToDeleteThought,
  handleDeleteThought,
}: ModalToDeleteThoughtProps) => {
  return (
    <>
      {modalToDeleteThought && (
        <div className="bg-white p-[10px] z-50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2>Seguro que quieres eliminarlo?</h2>

          <button
            onClick={() => setModalToDeleteThought(false)}
            className="m-4"
          >
            Cancelar
          </button>
          <button className="m-4" onClick={handleDeleteThought}>
            Eliminar
          </button>
        </div>
      )}
    </>
  );
};

export default ModalToDeleteThought;
