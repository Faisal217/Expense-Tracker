// const TransactionReducer = ((state, action)=>{
//     switch(action.type){
//         case "ADD_TRANSACTION": {
//             return [action.payload , ...state];
//         }
//         case "DELETE_TRANSACTION": {
//             {return state.filter((item) => item.id !== action.payload.id);}
//         }
//         default:
//             return state;
//     }
// })
/*        case 'Delete_Transaction': {

          let new_array = [];
            for (let i = 0; i < state.length; i++) {
                if (i !== action.index)
                    new_array.push(action.transactionsHistory[i]); console.log(action.index);
            }
            return new_array;
        }
*/

const TransactionReducer = ((state, action) => {

    switch(action.type){

        case "ADD_TRANSACTION": { return [action.payload, ...state]; } 
        case "DELETE_TRANSACTION": { return state.filter((item) => item.id !== action.payload.id); }
        

        default:

        return state;
        
        }    
})

 
export default TransactionReducer;