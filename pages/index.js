const user = {
  name: "Matheus Feitosa",
  image: "https://randomuser.me/api/portraits/men/61.jpg",
};
const workouts = [
  {
    id: 0,
    letter: "A",
    exercises: [
      {
        number: 1,
        name: "Supino Reto",
        weight: 30, //in kilograms
        reps: 10,
        sets: 3,
        restInterval: 45, //in seconds
      },
      {
        number: 2,
        name: "Leg Press 45º",
        weight: 30, //in kilograms
        reps: 10,
        sets: 3,
        restInterval: 45, //in seconds
      },
    ],
  },
  {
    id: 1,
    letter: "B",
    exercises: [
      {
        number: 1,
        name: "Leg Press 45º",
        weight: 30, //in kilograms
        reps: 10,
        sets: 3,
        restInterval: 45, //in seconds
      },
    ],
  },
  {
    id: 2,
    letter: "C",
    exercises: [
      {
        number: 1,
        name: "Supino Reto",
        weight: 30, //in kilograms
        reps: 10,
        sets: 3,
        restInterval: 45, //in seconds
      },
      {
        number: 2,
        name: "Leg Press 45º",
        weight: 30, //in kilograms
        reps: 10,
        sets: 3,
        restInterval: 45, //in seconds
      },
    ],
  },
  {
    id: 3,
    letter: "D",
    exercises: [
      {
        number: 1,
        name: "Supino Reto",
        weight: 30, //in kilograms
        reps: 10,
        sets: 3,
        restInterval: 45, //in seconds
      },
      {
        number: 2,
        name: "Leg Press 45º",
        weight: 30, //in kilograms
        reps: 10,
        sets: 3,
        restInterval: 45, //in seconds
      },
    ],
  },
];

import { useState } from "react";
import { getSession } from "next-auth/client";
import UserBox from "./components/UserBox";
import WorkoutSelector from "./components/WorkoutSelector";
import WorkoutViewer from "./components/WorkoutViewer";
import Login from "./components/Login";

export default function Home({ session }) {
  if (!session) return <Login />;

  const [selectedWorkout, setSelectedWorkout] = useState(workouts[0]);
  function selectWorkout(id) {
    setSelectedWorkout(workouts[id]);
  }

  return (
    <div className="bg-white justify-center flex">
      <div className="lg:p-9 flex-none">
        <div>
          <div className="text-center bg-gray-100 align-middle rounded-tr-3xl rounded-tl-3xl flex justify-center pb-5 ">
            <div className="m-3 mb-7 font-bold text-3xl text-gray-600">
              App Academia
            </div>
          </div>
          <div className="-mt-8 flex flex-1 shadow-md bg-gray-200 rounded-tr-3xl rounded-tl-3xl pb-5">
            <UserBox user={user} />
            <WorkoutSelector
              selectWorkout={selectWorkout}
              workouts={workouts}
            />
          </div>
          <div className="mb-3 border border-black"></div>
        </div>

        <div className="-mt-8 shadow-md bg-gray-300 rounded-br-lg rounded-bl-lg border-t-2 rounded-tr-3xl rounded-tl-3xl pb-1">
          <WorkoutViewer workout={selectedWorkout} />
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
