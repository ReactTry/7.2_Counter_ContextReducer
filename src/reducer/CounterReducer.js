export const CounterReducer = (state, action) => {
    switch (action.type) {
        case "increment":            
          return { count: state.count < 10 ? state.count+1 :10 }; 
          break;   
        case "decrement":
          if (state.count > 0) {
            return { count: state.count - 1 };
            break;
          }
          
        default:
          return state;
      }
};
