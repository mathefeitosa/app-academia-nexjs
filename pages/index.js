import { useState, useEffect } from "react";
import { getSession, session } from "next-auth/client";
import UserBox from "./components/UserBox";
import WorkoutSelector from "./components/WorkoutSelector";
import Login from "./components/Login";

import ExercisesViewer from "./components/ExercisesViewer";

export default function Home({ session }) {
  if (!session) return <Login />;

  const [updateAll, setUpdateAll] = useState(false);

  //fetching workouts data from firestore
  useEffect(() => {
    var url =
      "http://localhost:5000/users/" +
      session.user.id +
      "/workouts?_sort=letter&_order=asc";
    const getData = () => {
      fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (json) {
          setWorkouts(json);
        });
    };
    getData();
  }, [updateAll]);

  //setting up workouts state
  const [workouts, setWorkouts] = useState([]);
  const [selectedId, setSelectedId] = useState(0);

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
                setSelectedId={setSelectedId}
                workouts={workouts}
              />
            </div>
            <div className="pb-10 flex justify-center">
              {/* <WorkoutAdder /> */}
            </div>
          </div>
        </div>

        <div className="-mt-8 shadow-md bg-gray-300 rounded-br-lg rounded-bl-lg border-t-2 rounded-tr-3xl rounded-tl-3xl pb-1">
          <ExercisesViewer
            workouts={workouts}
            selectedId={selectedId}
            setUpdateAll={setUpdateAll}
          />
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
