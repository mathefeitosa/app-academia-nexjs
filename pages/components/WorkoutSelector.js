import { PlusIcon } from "@heroicons/react/solid";
import Button from "./Button";

function WorkoutSelector({ selectWorkout, workouts }) {
  return (
    <div className="p-3 text-center items-center">
      <div className="flex-1 m-2 text-center font-bold">Treinos</div>
      <div className="m-5 grid grid-cols-3 gap-3 flex-grow justify-center items-center">
        {workouts.map((workout) => (
          <div className="flex items-center justify-center">
            <Button
              key={workout.id}
              selectWorkout={selectWorkout}
              workout={workout}
            />
          </div>
        ))}
        <div className="-p-4 h-12 content-center border-2 rounded-xl bg-gray-200 transform ease-in hover:scale-105 transition duration-100 font-bold text-gray-100 hover:shadow-lg">
          <PlusIcon className="text-gray-500 hover:text-gray-400" height={40} />
        </div>
      </div>
    </div>
  );
}

export default WorkoutSelector;
