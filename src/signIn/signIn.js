import "../signIn/signIn.css";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Chip,
  Divider,
  Link,
  TextField,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { checkUser } from "../api";

function SignIn() {

    const [userMail,setUserMail] = useState('');
    const [userPassword,setUserPassword] = useState('');
    console.log(userPassword,userMail);

    const setUserMailFunction=(e)=>{
        setUserMail(e.target.value);
    }

    const setUserPasswordFunction=(e)=>{
        setUserPassword(e.target.value)
    }

    const navigate = useNavigate();

    const signInUser=()=>{
        checkUser({email:userMail,password:userPassword});
        navigate('/dashboard');
    }

  return (
    <Container maxWidth="sm" className="signIn">
      <LockOutlinedIcon fontSize="large" />
      <h1>Sign In</h1>
      <div className="input_field">
        <TextField id="outlined-basic" label="Email" variant="outlined" value={userMail} onChange={setUserMailFunction} />
        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" value={userPassword} onChange={setUserPasswordFunction} />
      </div>
      <Container>
        <Checkbox defaultChecked />
        Remember me
      </Container>
      <Container>
        <Divider>
          <Chip label="OR"></Chip>
        </Divider>
      </Container> 
      <div className="third_party_signin">
        <h2>
        Sign In using google :          
        </h2>
        <FcGoogle size={30}></FcGoogle>
      </div>
      <Button variant="contained" className="signButton" onClick={signInUser} >SIGN IN</Button>
      <Container className="thirdSection" >
        <Link href="https://www.example.com">Forgot Password?</Link>
        <Link href="https://www.example.com">
          Don't have an account?/sign up{" "}
        </Link>
      </Container>
    </Container>
  );
}

export default SignIn;
