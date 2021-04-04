import Posts from "./components/posts.js";
import Member from "./components/member.js";
import { Route, Switch, Redirect } from "react-router-dom";

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/member" exact component={Member} />
      <Route path="/posts" exact component={Posts} />

      <Redirect exact to="/" />
    </Switch>
  );
};

export default Routes;
