import ActionTypes from '../constants/constant'

const INITIAL_STATE = {
    users : [],
    guser : {},
    search : [],
}

export default(state=INITIAL_STATE,action) =>{

    switch(action.type){
            case ActionTypes.authState:
                return({
                    ...state,
                    guser: action.payload,
                })

            case ActionTypes.StoreToDB:
                    return({
                    ...state,
                    guser:action.payload,
                    })

            case ActionTypes.getUsers:
                return({

                    users: [...state.users,action.payload.new],
                })

            case ActionTypes.updateUser:
                    return({
                        ...state,
                        guser: action.payload,
                    })        
                    
                    
            case ActionTypes.QUERYDB:
                return({
                    ...state,
                     search: [...action.payload.new],
                }) 
                
            case ActionTypes.SIGNOUT:
                return(

                    {
                        users : [],
                        guser : {},
                        search : [],
                    }
                    
                
                    )
        default:
            return state;
    }
}

// case ActionTypes.welcome:
//             return ({
//                 ...state,
//                 name : action.payload.name
//            } )
  // case ActionTypes.SignUpWithEmail:
        //     return({
        //         ...state,
        //         emailuserdata: action.payload,
        //     })