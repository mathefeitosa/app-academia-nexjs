import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import UserBox from "./components/UserBox";
import WorkoutSelector from "./components/WorkoutSelector";
import WorkoutViewer from "./components/WorkoutViewer";
import Login from "./components/Login";
import WorkoutAdder from "./components/WorkoutAdder";
import { db } from "../firebase";

export default function Home({ session }) {
  if (!session) return <Login />;

  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setselectedWorkout] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("workouts").get();
      setWorkouts(data.docs.map((doc) => doc.data()));
    };
    fetchData()?.setselectedWorkout;
    setselectedWorkout(workouts[0]);
    console.log(selectedWorkout);
  }, []);

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
                setselectedWorkout={setselectedWorkout}
                workouts={workouts}
              />
            </div>
            <div className="pb-10 flex justify-center">
              <WorkoutAdder />
            </div>
          </div>
        </div>

        <div className="-mt-8 shadow-md bg-gray-300 rounded-br-lg rounded-bl-lg border-t-2 rounded-tr-3xl rounded-tl-3xl pb-1">
          <WorkoutViewer selectedWorkout={selectedWorkout} />
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
