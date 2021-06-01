import Button from "./Button";

function WorkoutSelector(props) {
  console.log(props.workouts);
  return (
    <div className="p-3 text-center items-center">
      <div className="flex-1 m-2 text-center font-bold">Treinos</div>
      <div className="m-5 grid grid-cols-3 gap-3 flex-grow justify-center items-center">
        {props.workouts?.map((workout) => (
          <div key={workout.id} className="flex items-center justify-center">
            <div
              onClick={() => {
                props.setSelectedId(workout.id);
                console.log(workout.id);
              }}
            >
              <Button key={workout.id} workout={workout} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutSelector;
