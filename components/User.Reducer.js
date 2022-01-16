const initialState = [];

export const userReducer = (state=initialState,action) => {

   switch (action.type) {
       case 'loaduser': 
       return { state: action.payload };
       default: 
       return state;
   }

}