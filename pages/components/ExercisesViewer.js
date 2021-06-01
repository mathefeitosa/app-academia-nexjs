import { PlusIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Exercise from "./Exercise";

function ExercisesViewer({ selectedId, setUpdateAll }) {
  const [exercises, setExercises] = useState([]);
  const [workout, setWorkout] = useState({});

  //fetching workouts data from firestore
  useEffect(() => {
    //getting exercises
    const getData = () => {
      fetch("http://localhost:5000/workouts/" + selectedId + "/exercises", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (json) {
          setExercises(json);
        });

      //getting workouts
      fetch("http://localhost:5000/workouts/" + selectedId, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (json) {
          setWorkout(json);
        });
    };
    getData();
  }, [selectedId]);

  return (
    <div>
      <div>
        <div className="text-center font-bold mt-4">
          {workout.letter ? <p>Treino {workout.letter}</p> : ""}
        </div>
        {exercises.map((exercise) => (
          <div>
            <div className="space-y-4 ml-8 mr-8 mt-3 mb-1">
              <div>
                <Exercise
                  number={exercise.number}
                  selectedId={selectedId}
                  e={exercise}
                  workoutLetter={workout.letter}
                  setUpdateAll={setUpdateAll}
                />
              </div>
            </div>
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

export default ExercisesViewer;
