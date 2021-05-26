function Button({ selectWorkout, workout }) {
  return (
    <div
      onClick={() => selectWorkout(workout.id)}
      onMouseEnter={() => selectWorkout(workout.id)}
      className="flex-initial p-4 rounded-xl bg-gray-500 hover:bg-gray-400 transform ease-in hover:scale-105 transition duration-100 font-bold text-gray-100 hover:shadow-lg"
    >
      {workout.letter}
    </div>
  );
}

export default Button;
