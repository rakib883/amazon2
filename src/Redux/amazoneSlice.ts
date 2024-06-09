import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    addCart: any[];
    userInfo :any;
}

const initialState: CounterState = {
   addCart: [],
    userInfo :null
};

export const amazone = createSlice({
  name: 'amazone',
  initialState,
  reducers: {
     addProduct: (state, action) => {
        const existingProduct = state.addCart.find((item) => item.id === action.payload.id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            state.addCart.push(action.payload);
        }
     },
     productDelete: (state, action) => {
           state.addCart = state.addCart.filter((item) => item.id !== action.payload);
     },
     clearProductCart: (state) => {
          state.addCart = [];
     },
     increment:(state,action)=>{
        const increment = state?.addCart?.find((item:any) =>item?.id === action?.payload?.id)
         if(increment){
              increment.quentity ++
         }
     },
     decrement:(state,action)=>{
        const decrement = state?.addCart?.find((item:any)=>item.id === action?.payload?.id)
        if(decrement.quentity === 1 ){
            decrement.quentity = 1
        }else{
            decrement.quentity --
        }
     },

     loginUser :(state,action)=>{
         state.userInfo = action.payload
     }
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, productDelete, clearProductCart,increment,decrement,loginUser } = amazone.actions;

export default amazone.reducer;
