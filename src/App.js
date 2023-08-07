// import SignIn from "./signIn/signIn";
import Dashboard from "./dashboard/dashboard";
import { Router, Route } from 'react-router-dom';
import "./index.css"
import SignIn from "./signIn/signIn";

function App() {

  // const navigate = useNavigate();

  return (
    <div className="App">
    {/* <SignIn></SignIn> */}
    <Dashboard/>

    <Router>
        <Route path="/" exact component={SignIn} />
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
    </Router>

    </div>
  );
}

export default App;
