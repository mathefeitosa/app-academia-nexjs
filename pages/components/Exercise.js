import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { CheckIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

function ExerciseInput({ number, selectedId, e, workoutLetter, setUpdateAll }) {
  //Logic to handle changes
  const [editMode, setEditMode] = useState(false);
  const [exercise, setExercise] = useState({});

  useEffect(() => {
    const getData = () => {
      var url =
        "http://localhost:5000/workouts/" +
        selectedId +
        "/exercises?number=" +
        e.number;

      fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (json) {
          setExercise(json[0]);
        });
    };
    getData();
  }, [selectedId]);

  const onChange = (event) => {
    event.preventDefault();
    setExercise({
      ...exercise,
      [event.target.name]: event.target.value,
    });
  };

  const editChangeHandle = (value) => {
    setEditMode(value);
  };

  const updateExercise = () => {
    const putData = () => {
      fetch("http://localhost:5000/exercises/" + workoutLetter + number, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(exercise),
      });
    };
    putData();
    setUpdateAll(true);
  };

  return (
    <div className="flex justify-center text-white transform ease-in hover:scale-105  transition duration-100">
      <form className="flex justify-center text-white transform ease-in hover:scale-105  transition duration-100">
        <div className="p-2 bg-gray-900 rounded-tl-lg rounded-bl-lg text-2xl font-bold">
          <div className={`${editMode ? "" : "hidden"}`}>
            <input
              number={exercise.number}
              className="w-12 text-black"
              type="number"
              min="1"
              name="number"
              placeholder={exercise.number}
              value={exercise.number}
              onChange={onChange}
            />
          </div>
          <div className={`${!editMode ? "" : "hidden"}`}>
            {exercise.number}
          </div>
        </div>
        <div className="flex-1 z-20 p-2 bg-gray-100 text-black">
          <div className="p-2 flex-1">
            <div className={`${editMode ? "" : "hidden"}`}>
              <input
                number={exercise.number}
                className="text-lg font-bold flex-1"
                type="text"
                placeholder={exercise.name}
                value={exercise.name}
                name="name"
                onChange={onChange}
              />
            </div>
            <div
              className={`text-md font-bold flex-1 ${
                !editMode ? "" : "hidden"
              }`}
            >
              {exercise.name}
            </div>
            <div className={`${editMode ? "" : "hidden"}`}>
              Peso:{" "}
              <input
                number={exercise.number}
                className="w-20 text-center"
                type="number"
                placeholder={exercise.weight}
                value={exercise.weight}
                name="weight"
                onChange={onChange}
              />{" "}
              kg
            </div>
            <div className={`${!editMode ? "" : "hidden"}`}>
              Peso: {exercise.weight} kg
            </div>
            <div className={`${editMode ? "" : "hidden"}`}>
              Repetições:{" "}
              <input
                number={exercise.number}
                className="w-20 text-center"
                type="number"
                placeholder={exercise.reps}
                value={exercise.reps}
                name="reps"
                onChange={onChange}
              />
            </div>
            <div className={`${!editMode ? "" : "hidden"}`}>
              Repetições: {exercise.reps}
            </div>
            <div className={`${editMode ? "" : "hidden"}`}>
              Sets:{" "}
              <input
                number={exercise.number}
                className="w-20 text-center"
                type="number"
                placeholder={exercise.sets}
                value={exercise.sets}
                name="sets"
                onChange={onChange}
              />
            </div>
            <div className={`${!editMode ? "" : "hidden"}`}>
              Sets: {exercise.sets}
            </div>
            <div className={`${editMode ? "" : "hidden"}`}>
              Descanço:{" "}
              <input
                number={exercise.number}
                className="w-20 text-center"
                type="number"
                placeholder={exercise.restInterval}
                value={exercise.restInterval}
                name="restInterval"
                onChange={onChange}
              />{" "}
              s
            </div>
            <div className={`${!editMode ? "" : "hidden"}`}>
              Descanço: {exercise.restInterval} s
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center items-center p-2 bg-green-100 hover:bg-green-400 text-gray-500 hover:text-black rounded-tr-lg rounded-br-lg ${
            editMode ? "" : "hidden"
          }`}
          onClick={() => editChangeHandle(false)}
        >
          <div className="flex-1" onClick={() => updateExercise()}>
            <CheckIcon width={30} height={30} />
          </div>
        </div>
        <div
          className={`flex justify-center items-center p-2 bg-green-100 hover:bg-green-400 text-gray-500 hover:text-black ${
            !editMode ? "" : "hidden"
          }`}
          onClick={() => editChangeHandle(true)}
        >
          <div className="flex-1">
            <PencilIcon height={20} />
          </div>
        </div>
        <div
          className={`flex justify-center items-center p-2 bg-red-100  hover:bg-red-400 text-gray-500 hover:text-black rounded-tr-lg rounded-br-lg ${
            !editMode ? "" : "hidden"
          }`}
        >
          <div className="flex-1">
            <TrashIcon width={20} height={20} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ExerciseInput;
