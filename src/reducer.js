export const initialState = {
    loggedinuser: null
}
const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'SET_LOGIN':
            return{
                ...state,
                loggedinuser:action.user
            }
            break
        default:
            break
    }
}
export default reducer