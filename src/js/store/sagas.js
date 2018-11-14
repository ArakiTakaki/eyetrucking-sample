import { takeEvery, put } from "redux-saga/effects";
import * as Actions from "./actions";
import * as API from "~/util/api";

/**
 * 他言語でよくあるsleepをpromiseで実装
 * @param {*} sTime
 */
function sleep(sTime) {
  var promise = new Promise(function(resolve, reject) {
    if (sTime <= 0) return reject(new Error("0秒以下のseepは実装できません"));
    setTimeout(function() {
      resolve();
    }, sTime);
  });
  return promise;
}

function* fetchCreateRoom(action) {
  yield put(Actions.progressStart());
  try {
    const res = yield API.createRoom(action.payload);
    const { ok, message } = res.data;
    yield put(Actions.messageOpen(message));
    // TODO if (ok) 後日ルームへのリダイレクトを追加する。
  } catch (e) {
    console.error(e);
    // TODO サーバと通信できないとの良い感じのエラー処理を記述する。
  }
  yield put(Actions.progressEnd());
}
// 自動的に閉じる時間を指定する。
const autoCloseTimer = 3000;
function* messageAutoClose() {
  yield sleep(autoCloseTimer);
  yield put(Actions.messageClose());
}

export default function* sagas() {
  yield takeEvery(Actions.CREATE_ROOM_REQUEST, fetchCreateRoom);
  yield takeEvery(Actions.MESSAGE_OPEN, messageAutoClose);
}
