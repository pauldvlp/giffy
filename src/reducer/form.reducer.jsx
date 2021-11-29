const types = {
  update_keyword: '@update/keyword',
  update_rating: '@update/rating',
};

const formReducer = (state, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case types.update_keyword:
      return {
        ...state,
        keyword: payload,
      };
    case types.update_rating:
      return {
        ...state,
        rating: payload,
      };
    default:
      return state;
  }
};

export default formReducer;
export { types };
