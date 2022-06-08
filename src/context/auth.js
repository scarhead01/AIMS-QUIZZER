import React, {useReducer, createContext} from 'react';
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const initialState = {
    user:null
}
//const navigate = useNavigate();

if(localStorage.getItem('jwtToken')){
    const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));

    // console.log(decodedToken)
    if(decodedToken.exp * 1000 < Date.now()){
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('loginData');
    } else{
        initialState.user = decodedToken;
    }
}

const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    logout:() => {}
})

function authReducer(state, action){
    switch (action.type){
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user:null
            }    
        default:
            return state;
    }  
}

    
   

function AuthProvider(props){
    const [state,dispatch] = useReducer(authReducer,initialState);

    function login(userData){
        localStorage.setItem("jwtToken",userData.token)
        dispatch({
            type: 'LOGIN',
            payload: userData
        })
    }

    function logout(){
        localStorage.removeItem('jwtToken')
        localStorage.removeItem('loginData');
        dispatch({type:'LOGOUT'});
        Navigate('/login')
    }

    return (
        <AuthContext.Provider
        value={{user: state.user,login,logout}}
        {...props}/>
    )
}
export {AuthContext,AuthProvider};