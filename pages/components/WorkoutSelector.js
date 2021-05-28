import Button from "./Button";

function WorkoutSelector(props) {
  return (
    <div className="p-3 text-center items-center">
      <div className="flex-1 m-2 text-center font-bold">Treinos</div>
      <div className="m-5 grid grid-cols-3 gap-3 flex-grow justify-center items-center">
        {props.workouts?.map((workout) => (
          <div key={workout.id} className="flex items-center justify-center">
            <Button
              key={workout.id}
              workout={workout}
              setSelectedWorkoutID={props.setSelectedWorkoutID}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutSelector;
