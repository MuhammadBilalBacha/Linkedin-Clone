import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../Firebase/firebase";

export const signinWithGoogle = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "LOAD" });

    try {
      const user = await signInWithPopup(auth, googleProvider);
      dispatch({
        type: "USER_LOGGED_IN",
        payload: user.user,
      });
    } catch (error) {
      alert(error.message);
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
};
