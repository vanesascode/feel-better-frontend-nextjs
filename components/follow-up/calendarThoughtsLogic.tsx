import { useState } from "react";
import {
  deleteCalendarThought,
  editCalendarThought,
} from "@/api/follow-up/followUp";
import ModalToEditThought from "./modalToEditThought";
import CalendarThoughtsUi from "./calendarThoughtsUi";
import { CalendarEvent } from "./calendarUi";
import ModalToDeleteThought from "./modalToDeleteThought";
import PopupsBackground from "../commons/popupsBackground";

interface CalendarThoughtsProps {
  selectedDate: Date | null;
  selectedThoughts: CalendarEvent[];
  token: string | null;
}

const CalendarThoughtsLogic = ({
  selectedDate,
  selectedThoughts,
  token,
}: CalendarThoughtsProps) => {
  const [idOfThoughtToBeEdited, setIdOfThoughtToBeEdited] =
    useState<string>("");
  const [idOfThoughtToBeDeleted, setIdOfThoughtToBeDeleted] =
    useState<string>("");
  const [positiveThoughtToBeEdited, setPositiveThoughtToBeEdited] =
    useState<string>("");
  const [negativeThoughtToBeEdited, setNegativeThoughtToBeEdited] =
    useState<string>("");
  const [feelingToBeEdited, setFeelingToBeEdited] = useState<string>("");
  const [modalToEditThought, setModalToEditThought] = useState<boolean>(false);
  const [modalToDeleteThought, setModalToDeleteThought] =
    useState<boolean>(false);

  const handleOpenModalToEditThought = (
    thought_id: string,
    positiveThought: string,
    negativeThought: string,
    feeling: string
  ) => {
    setIdOfThoughtToBeEdited(thought_id);
    setPositiveThoughtToBeEdited(positiveThought);
    setNegativeThoughtToBeEdited(negativeThought);
    setFeelingToBeEdited(feeling);
    setModalToEditThought(true);
  };

  const handleOpenModalToDeleteThought = (thought_id: string) => {
    setIdOfThoughtToBeDeleted(thought_id);
    setModalToDeleteThought(true);
  };

  const handleEditThought = async () => {
    try {
      await editCalendarThought({
        token,
        thought_id: idOfThoughtToBeEdited,
        positiveThought: positiveThoughtToBeEdited,
        negativeThought: negativeThoughtToBeEdited,
        feeling: feelingToBeEdited,
      });
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const handleDeleteThought = async () => {
    try {
      await deleteCalendarThought({
        token,
        thought_id: idOfThoughtToBeDeleted,
      });
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  return (
    <>
      {modalToEditThought || modalToDeleteThought ? (
        <PopupsBackground
          onClick={() => {
            setModalToEditThought(false);
            setModalToDeleteThought(false);
          }}
        />
      ) : null}

      <CalendarThoughtsUi
        selectedDate={selectedDate}
        selectedThoughts={selectedThoughts}
        handleOpenModalToEditThought={handleOpenModalToEditThought}
        handleOpenModalToDeleteThought={handleOpenModalToDeleteThought}
      />

      <ModalToEditThought
        handleEditThought={handleEditThought}
        setPositiveThoughtToBeEdited={setPositiveThoughtToBeEdited}
        setNegativeThoughtToBeEdited={setNegativeThoughtToBeEdited}
        setFeelingToBeEdited={setFeelingToBeEdited}
        positiveThoughtToBeEdited={positiveThoughtToBeEdited}
        negativeThoughtToBeEdited={negativeThoughtToBeEdited}
        feelingToBeEdited={feelingToBeEdited}
        setModalToEditThought={setModalToEditThought}
        modalToEditThought={modalToEditThought}
      />

      <ModalToDeleteThought
        setModalToDeleteThought={setModalToDeleteThought}
        modalToDeleteThought={modalToDeleteThought}
        handleDeleteThought={handleDeleteThought}
      />
    </>
  );
};

export default CalendarThoughtsLogic;
