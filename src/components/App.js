import GlobalStyle from "../css/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login/Login";
import Habits from "./habits/Habits";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Login />
                    </Route>
                    <Route path="/cadastro" exact>
                        <Login />
                    </Route>
                    <Route path="/habitos">
                        <Habits />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
