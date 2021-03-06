import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { CheckIcon } from "@heroicons/react/solid";
import { useState } from "react";

function ExerciseInput({
  id,
  name,
  number,
  weight,
  reps,
  sets,
  restInterval,
  onChange,
}) {
  //Logic to handle changes
  const [editMode, setEditMode] = useState(false);
  const editChangeHandle = (value) => {
    setEditMode(value);
  };

  return (
    <div className="flex justify-center text-white transform ease-in hover:scale-105  transition duration-100">
      <form className="flex justify-center text-white transform ease-in hover:scale-105  transition duration-100">
        <div className="p-2 bg-gray-900 rounded-tl-lg rounded-bl-lg text-2xl font-bold">
          <div className={`${editMode ? "" : "hidden"}`}>
            <input
              id={id}
              className="w-12 text-black"
              type="number"
              min="1"
              name="number"
              placeholder={number}
              value={number}
              onChange={onChange}
            />
          </div>
          <div className={`${!editMode ? "" : "hidden"}`}>{number}</div>
        </div>
        <div className="flex-1 z-20 p-2 bg-gray-100 text-black">
          <div className="p-2 flex-1">
            <div className={`${editMode ? "" : "hidden"}`}>
              <input
                id={id}
                className="text-lg font-bold flex-1"
                type="text"
                placeholder={name}
                value={name}
                name="name"
                onChange={onChange}
              />
            </div>
            <div
              className={`text-md font-bold flex-1 ${
                !editMode ? "" : "hidden"
              }`}
            >
              {name}
            </div>
            <div className={`${editMode ? "" : "hidden"}`}>
              Peso:{" "}
              <input
                id={id}
                className="w-20 text-center"
                type="number"
                placeholder={weight}
                value={weight}
                name="weight"
                onChange={onChange}
              />{" "}
              kg
            </div>
            <div className={`${!editMode ? "" : "hidden"}`}>
              Peso: {weight} kg
            </div>
            <div className={`${editMode ? "" : "hidden"}`}>
              Repeti????es:{" "}
              <input
                id={id}
                className="w-20 text-center"
                type="number"
                placeholder={reps}
                value={reps}
                name="reps"
                onChange={onChange}
              />
            </div>
            <div className={`${!editMode ? "" : "hidden"}`}>
              Repeti????es: {reps}
            </div>
            <div className={`${editMode ? "" : "hidden"}`}>
              Sets:{" "}
              <input
                id={id}
                className="w-20 text-center"
                type="number"
                placeholder={sets}
                value={sets}
                name="sets"
                onChange={onChange}
              />
            </div>
            <div className={`${!editMode ? "" : "hidden"}`}>Sets: {sets}</div>
            <div className={`${editMode ? "" : "hidden"}`}>
              Descan??o:{" "}
              <input
                id={id}
                className="w-20 text-center"
                type="number"
                placeholder={restInterval}
                value={restInterval}
                name="restInterval"
                onChange={onChange}
              />{" "}
              s
            </div>
            <div className={`${!editMode ? "" : "hidden"}`}>
              Descan??o: {restInterval} s
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center items-center p-2 bg-green-100 hover:bg-green-400 text-gray-500 hover:text-black rounded-tr-lg rounded-br-lg ${
            editMode ? "" : "hidden"
          }`}
          onClick={() => editChangeHandle(false)}
        >
          <div className="flex-1">
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
