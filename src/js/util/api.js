import Axios from "axios";
import { API_ROOT } from "~/contents/api";
import store from "~/store/configreStore";
import * as Actions from "~/store/actions";

/**
 * @param {string} type ActionsのType
 * @param {{ mehtod: "GET" "POST" "PUT" "DELETE", url :string, query : object }} 各種設定
 * @return {Axios}
 */
export const createAPIAction = options => {
  const { method, url, query = {} } = options;
  const requestOptions = { method, url };
  // paramsにしたらGET用？ dataにしたらPOST用
  requestOptions[method === "get" ? "params" : "data"] = query;
  return Axios(requestOptions);
};

export const createRoom = async roomName => {
  const query = { roomName: roomName };
  const body = { method: "POST", url: `${API_ROOT}/rooms`, query: query };
  return await createAPIAction(body);
};

export const initialGetRooms = async () => {
  try {
    const body = { method: "GET", url: `${API_ROOT}/rooms` };
    const res = await createAPIAction(body);
    //validation
    if (res.data.length === 0) {
      store.dispatch(Actions.createRoomOpen());
      store.dispatch(
        Actions.messageOpen("ルームが存在しません、作成してください")
      );
    }
    store.dispatch(Actions.getRoomListRequest(res.data));
  } catch (e) {
    console.error(e);
    store.dispatch(Actions.messageOpen("サーバが存在しません"));
  }
};
