import { PlusIcon } from "@heroicons/react/outline";
import ExerciseInput from "./ExerciseInput";
function WorkoutViewer(props) {
  return (
    <div>
      <div className="text-center font-bold mt-4">
        {props.workout.letter ? <p>Treino {props.workout.letter}</p> : ""}
      </div>
      <div className="space-y-4 ml-8 mr-8 mt-3 mb-1">
        {props.workout.exercises.map((exercise) => (
          <div>
            <ExerciseInput
              number={exercise.number}
              name={exercise.name}
              weight={exercise.weight}
              reps={exercise.reps}
              sets={exercise.sets}
              restInterval={exercise.restInterval}
            />
          </div>
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
