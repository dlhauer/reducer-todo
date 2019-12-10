export const initialState = [
    {
      item: 'Eat breakfast',
      completed: false,
      id: 5053972
    },
    {
      item: 'Eat lunch',
      completed: false,
      id: 5053972
    },
    {
      item: 'Eat dinner',
      completed: false,
      id: 5053972
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
      ]
    default:
      return state;
  }

}

