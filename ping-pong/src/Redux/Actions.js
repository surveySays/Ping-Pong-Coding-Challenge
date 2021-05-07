import { INCREMENT_LEFT_SCORE, INCREMENT_RIGHT_SCORE } from "./Types";

export const incrementLeftScore = (item) => (dispatch) => {
  dispatch({ type: INCREMENT_LEFT_SCORE, payload: item });
};

export const incrementRightScore = (item) => (dispatch) => {
  dispatch({ type: INCREMENT_RIGHT_SCORE, payload: item });
};
