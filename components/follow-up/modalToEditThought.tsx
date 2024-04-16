import React from "react";

interface ModalToEditThoughtProps {
  handleEditThought: () => void;
  setModalToEditThought: React.Dispatch<React.SetStateAction<boolean>>;
  modalToEditThought: boolean;
  positiveThoughtToBeEdited: string;
  negativeThoughtToBeEdited: string;
  feelingToBeEdited: string;
  setPositiveThoughtToBeEdited: React.Dispatch<React.SetStateAction<string>>;
  setNegativeThoughtToBeEdited: React.Dispatch<React.SetStateAction<string>>;
  setFeelingToBeEdited: React.Dispatch<React.SetStateAction<string>>;
}

const ModalToEditThought = ({
  setModalToEditThought,
  modalToEditThought,
  handleEditThought,
  positiveThoughtToBeEdited,
  negativeThoughtToBeEdited,
  feelingToBeEdited,
  setPositiveThoughtToBeEdited,
  setNegativeThoughtToBeEdited,
  setFeelingToBeEdited,
}: ModalToEditThoughtProps) => {
  return (
    <>
      {modalToEditThought && (
        <div className="bg-white p-[10px] z-50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2>Edita tus pensamientos</h2>
          <form onSubmit={handleEditThought}>
            <div>
              <label>Positive Thought:</label>
              <input
                type="text"
                defaultValue={positiveThoughtToBeEdited}
                onChange={(e) => setPositiveThoughtToBeEdited(e.target.value)}
              />
            </div>
            <div>
              <label>Negative Thought:</label>
              <input
                type="text"
                defaultValue={negativeThoughtToBeEdited}
                onChange={(e) => setNegativeThoughtToBeEdited(e.target.value)}
              />
            </div>
            <div>
              <label>Feeling:</label>
              <select
                defaultValue={feelingToBeEdited}
                onChange={(e) => setFeelingToBeEdited(e.target.value)}
              >
                <option value="😀">😀</option>
                <option value="🙂">🙂</option>
                <option value="😐">😐</option>
                <option value="🙁">🙁</option>
              </select>
            </div>

            <button
              onClick={() => setModalToEditThought(false)}
              className="m-4"
            >
              Cancelar
            </button>
            <button className="m-4" type="submit">
              Guardar
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ModalToEditThought;
