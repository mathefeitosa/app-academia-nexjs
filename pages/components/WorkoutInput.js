function WorkoutInput() {
  return (
    <div>
      <div
        key={exercise.number}
        className="flex justify-center text-white transform ease-in hover:scale-105  transition duration-100"
      >
        <div className="p-2 bg-gray-900 rounded-tl-lg rounded-bl-lg text-2xl font-bold">
          {exercise.number}
        </div>
        <div className="flex-1 z-20 p-2 bg-gray-100 text-black">
          <div className="p-2 flex-1">
            <div className="text-lg font-bold flex-1">{exercise.name}</div>
            <div>Peso: {exercise.weight} kg</div>
            <div>Repetições: {exercise.reps}</div>
            <div>Sets: {exercise.sets}</div>
            <div>Descanço: {exercise.restInterval} s</div>
          </div>
        </div>
        <div className="flex justify-center items-center p-2 bg-green-100 hover:bg-green-400 text-gray-500 hover:text-black">
          <div className="flex-1">
            <PencilIcon height={20} />
          </div>
        </div>
        <div className="flex justify-center items-center p-2 bg-red-100  hover:bg-red-400 text-gray-500 hover:text-black rounded-tr-lg rounded-br-lg">
          <div className="flex-1">
            <TrashIcon width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutInput;
