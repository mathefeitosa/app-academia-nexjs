//React + NextAuth + Redux + Firebase
import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import { connect } from "react-redux";
import { db } from "../firebase";

//Components
import UserBox from "./components/UserBox";
import WorkoutSelector from "./components/WorkoutSelector";
import Login from "./components/Login";
import WorkoutAdder from "./components/WorkoutAdder";
//--------------------------------GLOBAL VARIABLES------------------------------
var workouts, exercises;

//--------------------------------MAIN COMPONENT--------------------------------
function Home(props) {
  if (!props.session) return <Login />;

  //setting up states
  const [isNewUser, setIsNewUser] = useState(false);
  const [workouts, setWorkouts] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [workoutAdded, setWorkoutAdded] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      //Verifying if users exists and creating one if it dont
      var usersRef = db.collection("_users").doc(props.session.user.id);
      usersRef
        .get()
        .then((doc) => {
          if (doc.exists) console.log("Document Data:", doc.data());
          else {
            db.collection("_users").doc(props.session.user.id).set({
              name: props.session.user.name,
            });
          }
        })
        .catch((error) => console.log("Error:", error));

      //getting workouts for current user
      var workoutsRef = await db
        .collection("_workouts")
        .orderBy("letter")
        .where("user_id", "==", props.session.user.id)
        .get();
      var workoutsData = workoutsRef.docs.map((doc) => doc.data());
      setWorkouts(workoutsData);

      //getting exercises of current
      const exercisesRef = await db
        .collection("_exercises")
        //.orderBy("number") //waiting index creation
        .where("user_id", "==", props.session.user.id)
        .get();
      var exercisesData = exercisesRef.docs.map((doc) => doc.data());
      setExercises(exercisesData);
    };
    fetchData();
  }, [workoutAdded]);

  //fetching data from firestore
  const reloadDatabase = () => {
    setWorkoutAdded(workoutAdded + 1);
  };

  const exerciseChangeHandler = (event) => {
    event.preventDefault();
    const { id, value, name } = event.target;
    var w = workouts.filter((w) => w.id === selectedWorkoutID);
    var es = w[0].exercises;
    var e = es.filter((e) => e.id === id);
  };

  //adding workout switcher

  const [isAddingWorkout, setIsAddingWorkout] = useState(false);

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
                workouts={workouts}
                isAddingWorkout={isAddingWorkout}
              />
            </div>
            <div className="pb-10">
              <WorkoutAdder
                user={props.session.user}
                reloadDatabase={reloadDatabase}
                setIsAddingWorkout={setIsAddingWorkout}
                isAddingWorkout={isAddingWorkout}
              />
            </div>
          </div>
        </div>

        {/* <div className="-mt-8 shadow-md bg-gray-300 rounded-br-lg rounded-bl-lg border-t-2 rounded-tr-3xl rounded-tl-3xl pb-1">
          {workouts
            ?.filter((workout) => workout.id === selectedWorkoutID)
            ?.map((workout) => (
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
            ))}
        </div> */}
      </div>
    </div>
  );
}
//-----------------------------------EXPORTS--------------------------------------
//Component + Redux
function mapStateToProps(state) {
  return {
    workouts: workouts,
    exercises: exercises,
  };
}
export default connect(mapStateToProps)(Home);

//NexAuth
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
