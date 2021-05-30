import Button from "./Button";

function WorkoutSelector({ selectedWorkoutLetter, workouts }) {
  return (
    <div className="p-3 text-center items-center">
      <div className="flex-1 m-2 text-center font-bold">Treinos</div>
      <div className="m-5 grid grid-cols-3 gap-3 flex-grow justify-center items-center">
        {Object.keys(workouts).map((key, index) =>
          workouts[key].map((k, i) => {
            console.log(workouts[key][i]);
          })
        )}
        {/* {workouts.map((workout) => (
          <div className="flex items-center justify-center">
            <Button workout={workout} />
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default WorkoutSelector;
