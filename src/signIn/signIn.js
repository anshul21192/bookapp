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

function SignIn() {

    const navigate = useNavigate();

    const signInUser=()=>{
        navigate('/dashboard');
    }

  return (
    <Container maxWidth="sm" className="signIn">
      <LockOutlinedIcon fontSize="large" />
      <h1>Sign In</h1>
      <div className="input_field">
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
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
