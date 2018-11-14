// ======== init will serve first then fork other request on behalf of store request ============= //

import init from "./init";
import { fork } from "redux-saga/effects";
// import empty from "./getCategory";

export default function* root() {
  yield fork(init);
  // yield fork(empty);
}
