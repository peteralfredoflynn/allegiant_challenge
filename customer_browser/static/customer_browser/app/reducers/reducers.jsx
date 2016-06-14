export var fetchCustomersReducer = function(state = {all: {}, customer: null}, action) {
  switch(action.type) {
    case 'FETCH_CUSTOMERS':
      return {...state, all: action.payload.data};
    case 'FETCH_CUSTOMER':
      return { ...state, customer: action.payload.data};
    case 'FILTER_CUSTOMERS':
      return { ...state, all: action.payload.data};
    case 'NEXT_PAGE':
      return { ...state, all: action.payload.data};
    default:
      return state;
  }
};
