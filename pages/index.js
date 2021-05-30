import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import UserBox from "./components/UserBox";
import WorkoutSelector from "./components/WorkoutSelector";
import Login from "./components/Login";
import WorkoutAdder from "./components/WorkoutAdder";
import { db } from "../firebase";
import Exercise from "./components/Exercise";
import { PlusIcon } from "@heroicons/react/outline";

export default function Home({ session }) {
  if (!session) return <Login />;

  const test = {
    A: {
      letter: "A",
      exercises: {
        1: {
          number: 1,
          restInterval: 45,
          resp: 10,
          sets: 3,
          weight: 25,
          name: "Puxada aberta no pulley",
        },
        2: {
          number: 2,
          restInterval: 45,
          resp: 10,
          sets: 3,
          weight: 25,
          name: "Remada com corda na polia alta",
        },
        3: {
          number: 3,
          restInterval: 45,
          resp: 10,
          sets: 3,
          weight: 25,
          name: "Voardor dorsal",
        },
      },
    },
    B: {
      letter: "B",
      exercises: {
        1: {
          number: 1,
          restInterval: 45,
          resp: 10,
          sets: 3,
          weight: 25,
          name: "Stiff",
        },
        2: {
          number: 2,
          restInterval: 45,
          resp: 10,
          sets: 3,
          weight: 25,
          name: "Cadeira adutora",
        },
        3: {
          number: 3,
          restInterval: 45,
          resp: 10,
          sets: 3,
          weight: 25,
          name: "Cadeira abdutora",
        },
      },
    },
    C: {
      letter: "C",
      exercises: {
        1: {
          number: 1,
          restInterval: 45,
          resp: 10,
          sets: 3,
          weight: 12,
          name: "Elevação lateral",
        },
      },
    },
  };

  const save = [
    {
      id: 0,
      letter: "...",
      exercises: [
        {
          number: 0,
          restInterval: 0,
          resp: 0,
          sets: 0,
          weight: 0,
          name: "",
        },
      ],
    },
  ];

  //fetching workouts data from firestore
  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("workouts_test").get();
      var workoutsData = data.docs.map((doc) => doc.data());
      setWorkouts(workoutsData);
    };
    fetchData();
  }, []);

  //setting up workouts state
  const [workouts, setWorkouts] = useState({});
  const [selectedWorkoutLetter, setSelectedWorkoutLetter] = useState("A");

  const exerciseChangeHandler = (event) => {
    event.preventDefault();
    const { id, value, name } = event.target;
    var w = workouts.filter((w) => w.id === selectedWorkoutID);
    var es = w[0].exercises;
    var e = es.filter((e) => e.id === id);
    var en = e[0];
    //var property = value;
    //console.log(test["A"].exercises["1"]);
    db.collection("workouts_test").doc().set(test);
    //setWorkouts({workouts:[workouts[""]]})
  };

  return (
    <div className="bg-white justify-center flex">
      <div className="lg:p-9 flex-none">
        <div>
          <div className="text-center bg-gray-100 align-middle rounded-tr-3xl rounded-tl-3xl flex justify-center pb-5 ">
            <div className="m-3 mb-7 font-bold text-3xl text-gray-600">
              App Academia
            </div>
          </div>
          <div className="-mt-8 flex-1 shadow-md bg-gray-200 rounded-tr-3xl rounded-tl-3xl pb-5">
            <div className="flex">
              <UserBox />
              <WorkoutSelector
                selectedWorkoutLetter={selectedWorkoutLetter}
                workouts={workouts}
              />
            </div>
            <div className="pb-10 flex justify-center">
              <WorkoutAdder />
            </div>
          </div>
        </div>

        <div className="-mt-8 shadow-md bg-gray-300 rounded-br-lg rounded-bl-lg border-t-2 rounded-tr-3xl rounded-tl-3xl pb-1">
          {/* FILTER FOR THE SELECTED WORKOUT
          <div>
            <div className="text-center font-bold mt-4">
              {workout.letter ? <p>Treino {workout.letter}</p> : ""}
            </div>
            {workout.exercises.map((exercise) => (
              <div>
                <div className="space-y-4 ml-8 mr-8 mt-3 mb-1">
                  <div>
                    <Exercise
                      id={exercise.id}
                      key={exercise.id}
                      name={exercise.name}
                      number={exercise.number}
                      weight={exercise.weight}
                      reps={exercise.reps}
                      sets={exercise.sets}
                      restInterval={exercise.restInterval}
                      onChange={exerciseChangeHandler}
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
          ))} */}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
