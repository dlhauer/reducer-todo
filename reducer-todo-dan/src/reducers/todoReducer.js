export const initialState = [
    {
      item: 'Eat breakfast',
      completed: false,
      id: 5053972
    },
    {
      item: 'Eat lunch',
      completed: false,
      id: 4480145
    },
    {
      item: 'Eat dinner',
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
    default:
      return state;
  }

}

