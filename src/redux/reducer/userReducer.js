import  * as actionCreator  from '../actions/actionCreator'
const initialState={
    token:null,
    login:false,
    user:null
}

const userReducer=(state=initialState,action)=>{
    try {
        // debugger
        switch(action.type){
            case actionCreator.USER_LOGIN:
                return state
            default :
            return state    
        }
    } catch (error) {
        
    }
}

export default userReducer