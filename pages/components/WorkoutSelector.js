import {
  LockClosedIcon,
  MinusIcon,
  PlusIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import Button from "./Button";

function WorkoutSelector({ workouts, setIsAddingWorkout, isAddingWorkout }) {
  return (
    <div className="p-3 text-center items-center">
      <div className="flex-1 m-2 text-center font-bold">Treinos</div>
      <div className="m-5 grid grid-cols-3 gap-3 flex-grow justify-center items-center">
        {workouts.map((workout) => (
          <div key={workout.id} className="flex items-center justify-center">
            <Button key={workout.id} workout={workout} onClick={() => {}} />
          </div>
        ))}
        <div className="flex items-center justify-center">
          <div
            className={`flex-initial p-4 rounded-xl  transform ease-in hover:scale-105 transition duration-100 font-bold text-gray-100 hover:shadow-lg ${
              isAddingWorkout
                ? "bg-red-400 hover:bg-red-300"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
            onClick={() => setIsAddingWorkout(!isAddingWorkout)}
          >
            <PlusIcon
              className={`${!isAddingWorkout ? "" : "hidden"}`}
              height={20}
              width={15}
            />
            <XIcon
              className={`${isAddingWorkout ? "" : "hidden"}`}
              height={20}
              width={15}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutSelector;
