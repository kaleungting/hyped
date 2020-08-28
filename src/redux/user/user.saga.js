import { takeLatest, put, call, all } from "redux-saga/effects";
import { userActionTypes } from "./user.types";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  signInWithGoogle,
} from "../../firebase/firebase.utils";
import { googleSignInSuccess, googleSignInFailure } from "./user.actions";

export function* googleSignin() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSigninStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSigninStart)]);
}
