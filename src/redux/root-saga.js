import { call, all } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/shop.saga";
import { userSagas } from "./user/user.saga";
export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
//all takes in an array of sagas to be called concurrently

//if done through multiple yields, it would have to wait until each one to finish before firing
