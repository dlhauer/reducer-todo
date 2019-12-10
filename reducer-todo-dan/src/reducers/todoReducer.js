export const initialState = [
    {
      item: 'eat breakfast',
      completed: false,
      id: 5053972
    },
    {
      item: 'eat lunch',
      completed: false,
      id: 4480145
    },
    {
      item: 'eat dinner',
      completed: false,
      id: 5905068
    },
];

export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD':
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: new Date()
        }
      ];
    case 'TOGGLE_COMPLETE' :
      return state.map( item => {
        // if (item.id === action.payload) {
        //   return {...item, completed: !item.completed};
        // }
        return item.id === action.payload ? {...item, completed: !item.completed} : {...item}
      })
      case 'CLEAR_COMPLETED' :
        return state.filter(item => item.completed === false)
    default:
      return state;
  }

}

