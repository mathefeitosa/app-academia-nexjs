import { useRef } from "react";
import { db } from "../../firebase";

function WorkoutAdder() {
  const inputRef = useRef(null);

  const addWorkout = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("workouts").add({
      letter: inputRef.current.value,
      exercises: [
        {
          number: 1,
          name: "",
          weight: 0, //in kilograms
          reps: 0,
          sets: 0,
          restInterval: 0, //in seconds
        },
      ],
    });

    inputRef.current.value = "";
  };

  return (
    <div>
      <form className="inline-flex items-center" action="" method="post">
        <div className="flex-1 space-x-3">
          <input
            ref={inputRef}
            className="p-1 inline-flex ml-5 bg-white-600 outline-none flex-shrink rounded-tl-md rounded-bl"
            type="text"
            name=""
            placeholder="Nome do treino"
          />
        </div>
        <button
          onClick={addWorkout}
          className="inline-flex p-1 rounded-tr-md rounded-br-md bg-gray-500"
          type="submit"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default WorkoutAdder;
