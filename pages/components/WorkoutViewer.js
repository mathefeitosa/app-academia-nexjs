import { PlusIcon } from "@heroicons/react/outline";
import Exercise from "./Exercise";
function WorkoutViewer({ selectedWorkout }) {
  return (
    <div>
      <div className="text-center font-bold mt-4">
        {selectedWorkout?.letter ? <p>Treino {selectedWorkout?.letter}</p> : ""}
      </div>
      <div className="space-y-2 ml-8 mr-8 mt-3 mb-1">
        {selectedWorkout?.exercises?.map((exercise) => (
          <Exercise
            key={exercise.number}
            number={exercise.number}
            name={exercise.name}
            weight={exercise.weight}
            reps={exercise.reps}
            sets={exercise.sets}
            restInterval={exercise.restInterval}
          />
        ))}
        <div className="flex justify-center">
          <PlusIcon
            width={30}
            height={30}
            className="m-1 text-gray-500 hover:text-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

export default WorkoutViewer;
