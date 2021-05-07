const initialState = {
  leftScore: 0,
  rightScore: 0,
  leftWins: 0,
  rightWins: 0,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_LEFT_SCORE":
      return {
        ...state,
        leftScore: state.leftScore + 1,
      };
    case "INCREMENT_RIGHT_SCORE":
      return {
        ...state,
        rightScore: state.rightScore + 1,
      };
    case "INCREMENT_LEFT_WINS":
      return {
        ...state,
        leftWins: state.leftWins + 1,
      };
    case "INCREMENT_RIGHT_WINS":
      return {
        ...state,
        rightWins: state.rightWins + 1,
      };
    case "RESET_SCORE":
      return {
        ...state,
        rightScore: (state.rightScore = 0),
        leftScore: (state.leftScore = 0),
      };
    default:
      return state;
  }
}

export default Reducer;
