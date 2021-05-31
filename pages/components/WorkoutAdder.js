import { useRef } from "react";
import { db } from "../../firebase";

function WorkoutAdder({ user, reloadDatabase }) {
  const nameInputRef = useRef(null);
  const letterInputRef = useRef(null);

  //Adds workout and refresh the db
  const addWorkout = (e) => {
    //checking if is empty
    e.preventDefault();
    if (!nameInputRef.current.value) return;

    db.collection("_workouts").add({
      user_id: user.id,
      letter: letterInputRef.current.value,
      exercise_ids: [],
      name: nameInputRef.current.value,
    });

    nameInputRef.current.value = "";
    letterInputRef.current.value = "";
    reloadDatabase();
  };

  return (
    <div>
      <form
        className="flex flex-col border-black justify-center items-center text-center"
        action=""
        method="post"
      >
        <div className="flex">
          <div>
            <div className="flex flex-col">
              <input
                ref={letterInputRef}
                className="p-1 ml-5 bg-white-600 outline-none rounded-tl-md rounded-bl"
                type="text"
                name=""
                maxLength={1}
                placeholder="Letra do Treino (Ex.: A)"
              />
            </div>
            <input
              ref={nameInputRef}
              className="p-1 ml-5 bg-white-600 outline-none rounded-tl-md rounded-bl"
              type="text"
              name=""
              placeholder="Nome do treino"
            />
          </div>
          <div className="flex">
            <button
              onClick={addWorkout}
              className="flex-1 p-1 rounded-tr-md rounded-br-md bg-gray-500"
              type="submit"
            >
              Adicionar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default WorkoutAdder;
