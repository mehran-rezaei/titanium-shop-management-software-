import React, { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../../dataservice/Configs/cookieProvider';
import { CreateTokenForUser } from '../../dataservice/LoginProvider';
import { TextField } from '@mui/material';
import SelectPage from './SelectPage';

const LoginPage = () => {
  const [openRolePage , setOpenRolePage] = useState(true)
  const [showPage , setShowPage] = useState(false)

  const ariaLabel = {
    input: { color: 'white' },
    '& label.Mui-focused': {
      color: '#00cecbc4',
    },
    '& label': {
      color: 'white',
      opacity: '0.6',
      fontSize : "12px"
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#00cecbc4',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#00cecbc4',
        borderRadius : '10px'
      },
      '&:hover fieldset': {
        borderColor: '#00cecbc4',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#00cecbc4',
      },
      '& .MuiInputBase-root': {
        color: 'white',
      },
    },
  };
  setTimeout(function() {
          setShowPage(true)
         }, 700)
  useEffect(() => {
       if(getCookie('token')){
        console.log('yes');

  setOpenRolePage(false)
       } else{
        console.log('no');

       }
  } , [])
  const [data , setData] = useState({
    userName : '',
    password : '',
})
    // let router = useRouter()
  const loginHandler = () => {
    CreateTokenForUser(data)
    .then(Response => {
      console.log(Response);
      setCookie('token', Response.data.token)
      setCookie('refreshToken', Response.data.refreshToken)
      // notify('success','you login successfully     ')
      setTimeout(function() {
        // setCookie('login', 'yes')
        setOpenRolePage(false)
      // router.push('/')
         }, 500)
    })
    .catch(error =>  {
        console.log(error)
        // notify('error','invalid Data  ')
    })
  }
const changeHandler = (event:any) => {
  setData({ ...data , [event.target.name] : event.target.value })
  console.log(data);
}
console.log('ffffffffffffffffffffffff');

  return (
    <>
    {openRolePage ?
    showPage &&
  <div className="login__page">
      <div className='left__'>
      {/* <img src={logo} alt="" style={{ height : 100}} /> */}
         <h3 className='maintitle'>Titanium</h3>
        <span className='title__container'>
        <div className='title__left'></div>
        <h3 className='title'>Welcome to Titanium</h3>
        <div className='title__right'></div>
        </span>
        {/* <h2>Welcome to Titanium</h2> */}

        <TextField
           inputProps={{style: { height: '20px',fontSize : "14px" },}}
                sx={ariaLabel}
                size="small"
                style={{ width: 400 }}
                value={data.userName}
                 name="userName"
                //  id="email"
                label="Username"
                onChange={changeHandler}
                // name="UserName"
                id="outlined-basic"
                type="text"
                variant="outlined"
              />

          <TextField
           inputProps={{style: { height: '20px',fontSize : "14px" },}}
                sx={ariaLabel}
                size="small"
                style={{ width: 400 }}
                onChange={changeHandler}
                value={data.password}
                name="password"
                label="Password"
                id="outlined-basic"
                type="password"
                variant="outlined"
              />
              <h4 className='left-forget'> forget?</h4>
        {/* <Input placeholder="Username" /> */}
        {/* <Input placeholder="Password" /> */}
        <button className='left__btn'
        // onClick={() => setOpenRolePage(false)}
        onClick={loginHandler}
        >
            {/* <Link to="/sale">Login</Link> */}
            Login
        </button>
        <span className='title__container'>
        <div className='title__left'></div>
        <h3 style={{ fontSize : 19 , margin : '0 10px' , color : 'white'}} className=''
        >Don’t have on account? /
        <span style={{ color : '#03FBF5' , cursor : 'pointer'}}> Signup</span>
         </h3>
        <div className='title__right'></div>
        </span>
        <select name="" id="" style={{ background : 'none'
        , border : 'none' , color : 'white', fontSize : 16 }}>
          <option value="" key="">Eng</option>
        </select>

      </div>
      <div className='right__'>
      {/* <img src={logo} alt="" style={{ height :150}} /> */}
         <h3 className='maintitle'>Titanium</h3>
      </div>
      </div> :

      <div>
        <SelectPage/>
      </div>
      }
      </>
  );
};

export default LoginPage;
