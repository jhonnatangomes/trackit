import GlobalStyle from "../css/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login/Login";
import Habits from "./habits/Habits";
import HabitsToday from "./habitsToday/HabitsToday";
import History from "./history/History";

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
                    <Route path="/habitos" exact>
                        <Habits />
                    </Route>
                    <Route path="/hoje" exact>
                        <HabitsToday />
                    </Route>
                    <Route path="/historico" exact>
                        <History />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
