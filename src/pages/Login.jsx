import styled from 'styled-components';

import React,{useContext, useState} from 'react'

import gql from 'graphql-tag';
import {useMutation} from '@apollo/react-hooks'
import logo from '../images/logo.png'
import { AuthContext } from '../context/auth';
import { useForm } from '../util/hook';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login'
import blob from '../images/blob.png'
import poster from'../images/poster.png'
import background from '../images/background.png'
import back from '../images/loginback.png'

const Login = () => {
 
  const navigate=useNavigate()
  const context = useContext(AuthContext)
  const [email, setemail] = useState("")
  const [profPic, setprofPic] = useState("")
  const [name, setname] = useState("")
  
  const [select, setSelects] = useState("Login")


    const [errors,setErrors]= useState({});
    const { user } = useContext(AuthContext)


    const { onChange, onSubmit, values } = useForm(loginUserCallback,{
        username:'',
        password:'',
      
    })

    const Selected = (selected) => {
      setSelects(selected);
    //  console.log(select)
  
    }

    const [LoginUser,{loading}] = useMutation(LOGIN_USER,{
        update(_,{ data: { login: userData }}){ 
            context.login(userData)
            navigate('/')
            //console.log(userData)
           // console.log(user)
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables:values
    })

    
    const [addUser] = useMutation(REGISTER_USER,{
      update(_, { data: { registerGoogle: userData }}){
          context.login(userData);
          navigate('/')
      },
     
      variables:{name,email,profPic}
  })

  const RegisterUser = () => {
    setemail(loginData?.email)
    setprofPic(loginData?.picture)
    setname(loginData?.name)
  // console.log(loginData?.email)
  }

    function loginUserCallback (){
       LoginUser();
    }

    const [loginData, setLoginData] = useState(
      localStorage.getItem('loginData')
        ? JSON.parse(localStorage.getItem('loginData'))
        : null
    );
  
    const handleFailure = (result) => {
      alert(result);
    };
   console.log(loginData)
    const handleLogin = async (googleData) => {
      const res = await fetch('https://aimsquizzer.herokuapp.com/api/google-login', {
        method: 'POST',
        body: JSON.stringify({
          token: googleData.tokenId,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
       console.log(googleData)
      const data = await res.json();
      setLoginData(data);
      const name = data.name;
      const email = data.email;
      const profFic = data.picture
      localStorage.setItem('loginData', JSON.stringify(data));
      console.log(data)
      setemail(data?.email)
      setprofPic(data?.picture)
      setname(data?.name)
      
      addUser();
     
    };
    const handleLogout = () => {
      localStorage.removeItem('loginData');
      setLoginData(null);
    };

  return <LoginCon>
       {/* <Logo src={logo} >
         
         </Logo>
         <Blob src={blob}>

         </Blob>
         <Blob2 src={blob} />
         <Con3d src={poster}>
         
   </Con3d> */}
    {/* <TopCon src={background}/> */}
    <Con>
    <Logo src={logo} />
    <Tag>
    <h1>Welcome!</h1>
    <h2>Ready to test your knowledge? </h2>
    <p> Aims-Quizzer is an app that offers learning games about Hospitality management topics. </p>
    <Con3d src={poster}/>

    </Tag>
    <LogoBack src={back}/>
    <Circle />
    <Circle1 />
    <Circle2 />
   <Circle3 /> 
     <LoginBox  className={select==="Login" ? "active":"inactive"} >
     <h3>Login</h3>
     {Object.keys(errors).length > 0 &&(
               <div className="ui error message">
               <ul className="list">
                   {Object.values(errors).map(value => (
                       <li key={value}> {value}</li>
                   ))
 
                   }
               </ul>
           </div>
          )}
     <label for="sNum">Email Address</label>
     <input type="text"  placeholder='example@email.com'
       label="Username"
    
       name="username"
       autoComplete="username" 
    
       error={errors.username ? true : false}
       values={values.username}
       onChange={onChange}
     />
     <label for="sNum"> Password</label>
     <input type="password"  placeholder='*******'
       label="Password"
     
       name="password"
   
       autoComplete="new-password"

       values={values.password}
       error={errors.password ? true : false}
       onChange={onChange}
     />
     <Submit onClick={onSubmit}>
       Login
     </Submit>
     <Submit2  className={select==="Login" ? "active":"inactive"} onClick={Selected.bind(this,"Register")}>
       Create New Account
     </Submit2>
     {loginData ? (
           <>
           <h3>Successfully Logged in</h3>
           </>
          ) : (
   <GoogleLogin clientId={process.env.REACT_APP_GOOGLE_CLIENT_LOGIN}
   buttonText="             Log in with Google   "
   onSuccess={handleLogin}
   onFailure={handleFailure}
   cookiePolicy={'single_host_origin'}
   
   ></GoogleLogin>
          )}
     </LoginBox>
     <RegisterBox  className={select==="Register" ? "active":"inactive"} >
     <h3>Register</h3>
     {Object.keys(errors).length > 0 && (
               <div className="ui error message">
               <ul className="list">
                   {Object.values(errors).map(value => (
                       <li key={value}> {value}</li>
                   ))
 
                   }
               </ul>
           </div>
          )}
     <label for="sNum">Email Address</label>
     <input type="text"  placeholder='example@email.com'
       label="Username"
    
       name="username"
       autoComplete="username" 
    
       error={errors.username ? true : false}
       values={values.username}
       onChange={onChange}
     />
     <label for="sNum"> Password</label>
     <input type="password"  placeholder='*******'
       label="Password"
     
       name="password"
   
       autoComplete="new-password"

       values={values.password}
       error={errors.password ? true : false}
       onChange={onChange}
     />
      <label for="sNum"> Confirm Password</label>
     <input type="password"  placeholder='******* ********'
       label="Confirm Password"
     
       name="confirmPassword"
   
       autoComplete="new-password"

       values={values.confirmPassword}
       error={errors.confirmPassword ? true : false}
       onChange={onChange}
     />
     <Submit onClick={onSubmit}>
       Register
     </Submit>
     <Submit3  className={select==="Register" ? "active":"inactive"} onClick={
      Selected.bind(this,"Login")}>
      Already have an Account?
     </Submit3>
     {loginData ? (
           <>
           <h3>Successfully Logged in</h3>
           </>
          ) : (
   <GoogleLogin clientId={process.env.REACT_APP_GOOGLE_CLIENT_LOGIN}
   buttonText="             Sign Up with Google   "
   onSuccess={handleLogin}
   onFailure={handleFailure}
   cookiePolicy={'single_host_origin'}
   
   ></GoogleLogin>
          )}
     </RegisterBox>
     </Con>
  </LoginCon>;
};

const LOGIN_USER = gql `
mutation login(
    $username: String!
    $password: String! 
){
    login(
       
            username:$username  
            password:$password
    ){
        id email username createdAt token
    }
}
`

const REGISTER_USER = gql `
mutation registerGoogle(
    $name: String!,
    $email: String!,
    $profPic:String!
){
    registerGoogle(
       email:$email, name:$name, profPic:$profPic
    ){
        id 
        email
        name
        profPic
        createdAt
        token
    }
}
`


const LoginCon = styled.div`
//position: relative;
height:100vh ;
width:100%;
display: flex;
flex-wrap: wrap ;
justify-content:center ;
align-items: center ;
//flex-direction: column;
background: rgb(72,0,189);
background: -moz-linear-gradient(61deg, rgba(72,0,189,1) 0%, rgba(83,0,201,1) 100%);
background: -webkit-linear-gradient(61deg, rgba(72,0,189,1) 0%, rgba(83,0,201,1) 100%);
background: linear-gradient(61deg, rgba(72,0,189,1) 0%, rgba(83,0,201,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4800bd",endColorstr="#5300c9",GradientType=1);

`

const Tag = styled.div`
  @media screen and ( max-width:468px){
   width:70%;
}
@media screen and ( max-width:668px){
   width:400px;
  // visibility: hidden ;
}
@media screen and ( min-width:668px) and ( max-width:868px){
   width:20%;
}
@media screen and ( min-width:868px) and ( max-width:1268px){
   width: 500px;
}
`
const Con = styled.div`
display:block ;
margin: auto;
width: 90% ;
z-index:15;
border-radius: 20px ;
font-family: 'Grenze', serif;
font-family: 'Montserrat', sans-serif;
height:90vh ;
justify-content:center ;
align-items:center ;
 background: rgb(237,232,255);
background: -moz-linear-gradient(95deg, rgba(237,232,255,1) 0%, rgba(255,224,248,1) 100%);
background: -webkit-linear-gradient(95deg, rgba(237,232,255,1) 0%, rgba(255,224,248,1) 100%);
background: linear-gradient(95deg, rgba(237,232,255,1) 0%, rgba(255,224,248,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ede8ff",endColorstr="#ffe0f8",GradientType=1);
& h1{
position:absolute ;
top: 25vh;
color: #fdebff ;
z-index:15 ;
left:12% ;
font-size: 37px ;
font-family: 'Grenze', serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Patrick Hand', cursive;
letter-spacing:1.5px ;
}
& h2{
  position:absolute ;
  top: 34vh;
color: #eeddf0 ;
z-index:15 ;
left:12% ;
font-size: 20px ;
font-weight:600 ;
}
& p{
  position:absolute ;
  top: 39vh;
color: #e9dbeb ;
z-index:15 ;
left:14% ;
font-size: 17px ;
font-weight:600 ;
width:25% ;
}
`
const Con3d = styled.img`
position:absolute ;
z-index:10 ;
top: 53% ;
left:14% ;
width:400px ;
height:250px ;
@media screen and ( max-width:468px){
bottom:-700px ;
width:100px ;
height:150px ;
@media screen and ( min-width:668px) and ( max-width:868px){
  width:100px ;
height:150px ;
}
@media screen and ( min-width:868px) and ( max-width:1268px){
   width: 500px;
}
}
`
const LogoBack = styled.img`
height:90%;
width:53%;
border-bottom-left-radius:20px ;
position:absolute ;
opacity:0.9 ;

`
const Circle = styled.div`
position: absolute ;
height:80px;
width:80px ;
right: 10%;
top: 10vh ;
z-index:17 ;
border-radius:50% ;
background: rgb(212,0,255);
background: -moz-linear-gradient(61deg, rgba(212,0,255,1) 0%, rgba(39,0,201,1) 100%);
background: -webkit-linear-gradient(61deg, rgba(212,0,255,1) 0%, rgba(39,0,201,1) 100%);
background: linear-gradient(61deg, rgba(212,0,255,1) 0%, rgba(39,0,201,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#d400ff",endColorstr="#2700c9",GradientType=1);
`

const Circle1 = styled.div`
position: absolute ;
height:30px;
width:30px ;
right: 9%;
top: 16vh ;
z-index:17 ;
border-radius:50% ;
background: rgb(174,0,209);
background: -moz-linear-gradient(61deg, rgba(174,0,209,1) 0%, rgba(203,0,224,1) 63%, rgba(201,0,201,1) 100%);
background: -webkit-linear-gradient(61deg, rgba(174,0,209,1) 0%, rgba(203,0,224,1) 63%, rgba(201,0,201,1) 100%);
background: linear-gradient(61deg, rgba(174,0,209,1) 0%, rgba(203,0,224,1) 63%, rgba(201,0,201,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ae00d1",endColorstr="#c900c9",GradientType=1);
`

const Circle2 = styled.div`
position: absolute ;
height:100px;
width:100px ;
right: 33%;
bottom: 11vh ;
z-index:10 ;
border-radius:50% ;
@media screen and ( max-width:568px){

visibility: hidden;
}
background: rgb(22,91,222);
background: -moz-linear-gradient(61deg, rgba(22,91,222,1) 5%, rgba(14,173,223,1) 32%, rgba(0,224,194,1) 63%);
background: -webkit-linear-gradient(61deg, rgba(22,91,222,1) 5%, rgba(14,173,223,1) 32%, rgba(0,224,194,1) 63%);
background: linear-gradient(61deg, rgba(22,91,222,1) 5%, rgba(14,173,223,1) 32%, rgba(0,224,194,1) 63%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#165bde",endColorstr="#00e0c2",GradientType=1);
`
const Circle3 = styled.div`
position: absolute ;
display:block ;
height:60px;
width:60px ;
right: 31%;
bottom: 12vh ;
z-index:12 ;
border-radius:50% ;
@media screen and ( max-width:568px){

visibility: hidden;
}
background: rgb(223,14,37);
background: -moz-linear-gradient(61deg, rgba(223,14,37,1) 2%, rgba(255,11,156,1) 37%, rgba(205,22,211,1) 56%, rgba(152,28,186,1) 68%, rgba(0,77,224,1) 92%);
background: -webkit-linear-gradient(61deg, rgba(223,14,37,1) 2%, rgba(255,11,156,1) 37%, rgba(205,22,211,1) 56%, rgba(152,28,186,1) 68%, rgba(0,77,224,1) 92%);
background: linear-gradient(61deg, rgba(223,14,37,1) 2%, rgba(255,11,156,1) 37%, rgba(205,22,211,1) 56%, rgba(152,28,186,1) 68%, rgba(0,77,224,1) 92%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#df0e25",endColorstr="#004de0",GradientType=1);
`

const LoginBox = styled.div`
visibility: hidden ;
width: 300px;
height: 430px;
//margin:auto ;
box-shadow: 0 0 2px 3px rgba(0,0,0,0.2) ;
position: absolute;
right: 11%;
overflow:hidden ;
border-radius: 15px;
padding: 20px;
margin-top:10vh ;
background-color: #f4e6ff;
display: flex;
z-index:16 ;
flex-direction: column;
@media screen and ( max-width:768px){
margin:22% auto ;
width: 280px;
height: 28em;
left:0 ;
right:0 ;

}
& h3{
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight:600;
}
& input{
  border: none;
  border-bottom: 2px solid purple;
  background-color: #f1d3ff92;
  width: 80%;
  margin: auto;
  padding: 8px;
  border-radius: 5px;
  margin-top:10px;
  margin-bottom: 10px;
  &:focus{
    outline: none;
  }
}
& label{
  width: 80%;
  margin: auto;
  margin-top: 25px;
  font-size: 15px;
  font-weight: 600;
}
&.active {
  visibility: visible ;

}
`

const RegisterBox = styled.div`
width: 350px;
height: 62vh;
visibility: hidden ;
//margin:auto ;
box-shadow: 0 0 2px 3px rgba(0,0,0,0.2) ;
position: absolute;
right: 10%;
overflow:hidden ;
border-radius: 15px;
padding: 20px;
margin-top:12vh ;
background-color: #f4e6ff;
display: flex;
z-index:16 ;
flex-direction: column;
@media screen and ( max-width:468px){
right: 0em;
width: 280px;
height: 28em;
left: 0;
}
& h3{
  text-align: center;
  font-size: 20px;
  margin-bottom: 6px;
  font-weight:600;
}
& input{
  border: none;
  border-bottom: 2px solid purple;
  background-color: #f1d3ff92;
  width: 80%;
  margin: auto;
  padding: 8px;
  border-radius: 5px;
  margin-top:5px;
  margin-bottom: 10px;
  &:focus{
    outline: none;
  }
}
& label{
  font-weight: 600 ;
  width: 80%;
  margin: auto;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 600;
}
&.active {
  visibility: visible;
}
`

const Logo = styled.img`
height: 80px;


color: #5A00CC;
position:absolute ;
z-index:10 ;
@media screen and ( max-width:768px){
height: 4em ;

}

`

const Blob = styled.img`
position:absolute ;
z-index:8 ;
top:-290px ;
left:-200px ;
background-blend-mode: lighten;
`

const Blob2 = styled.img`
position:absolute ;
z-index:8 ;
top:0px ;
right:-120px ;
`
const Submit = styled.button`
margin: auto;
margin-top: 40px;
cursor: pointer;
padding: 10px 10px;
width: 50%;
border: none;
color: #efc5ff;
border-radius: 10px;
box-shadow: 0 0 2px 1px rgba(0,0,0,0.1);
background-color: #e200e2;
margin-bottom: 15px;
`
const Submit2 = styled.button`
margin: auto;

cursor: pointer;
padding: 10px 10px;
text-decoration:none ;
font-weight: 600 ;
border: none;
color: #5e0083;
margin-bottom: 20px;
`

const Submit3 = styled.button`
margin: auto;

cursor: pointer;
padding: 10px 10px;
text-decoration:none ;
font-weight: 600 ;
border: none;
color: #5e0083;
margin-bottom: 15px;
`

export default Login;

