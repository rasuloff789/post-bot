import { Switch , Route } from "react-router-dom" ;
import Home from "./Home";
import Comment from "./Comment";

import './App.css';

function App() {
  return (
    <>
    <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/comments/:postID" component={Comment} exact />
    </Switch>
    </>
    );
  }
  
  export default App;
  