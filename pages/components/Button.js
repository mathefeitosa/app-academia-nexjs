function Button(props) {
  return (
    <div
      key={props.workout.id}
      onClick={() => {
        props.setSelectedWorkoutID(props.workout.id);
      }}
      className="flex-initial p-4 rounded-xl bg-gray-500 hover:bg-gray-400 transform ease-in hover:scale-105 transition duration-100 font-bold text-gray-100 hover:shadow-lg"
    >
      {props.workout.letter}
    </div>
  );
}

export default Button;
