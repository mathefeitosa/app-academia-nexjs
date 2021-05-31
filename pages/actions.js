export function addWorkout(workout) {
  return {
    type: "ADD_WORKOUT",
    data: workout,
  };
}

export function addExercise(exercise) {
  return {
    type: "ADD_EXERCISE",
    data: exercise,
  };
}
