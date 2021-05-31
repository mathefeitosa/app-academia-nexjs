import "../styles/globals.css";
import { Provider } from "next-auth/client";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { db } from "../firebase";

const initialState = {
  workouts: [],
  exercises: [],
};

//Reducer Function
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_WORKOUT":
      return {
        ...state,
      };
    case "DEL_WORKOUT":
      break;
    case "ADD_EXERCISE":
      break;
    case "DEL_EXERCISE":
      break;

    default:
      return state;
  }
}
const store = createStore(reducer);

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />;
      </Provider>
    </ReduxProvider>
  );
}

export default MyApp;
