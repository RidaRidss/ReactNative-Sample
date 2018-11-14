// @flow
const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";
const CANCEL = "CANCEL";

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, CANCEL].forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

// network related action type

export const NETWORK_INFO = "NETWORK_INFO";
// export const EMPTY_ACTION_REQUEST = createRequestTypes("EMPTY_ACTION_REQUEST");
// export const EMPTY_ACTION = "EMPTY_ACTION";
