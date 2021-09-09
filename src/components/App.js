import GlobalStyle from "../css/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Login from "./login/Login";
import Habits from "./habits/Habits";
import HabitsToday from "./habitsToday/HabitsToday";
import History from "./history/History";
import LoginContext from "../contexts/LoginContext";

export default function App() {
    const [login, setLogin] = useState({
        name: "",
        email: "",
        image: "",
        password: "",
    });

    return (
        <>
            <GlobalStyle />
            <LoginContext.Provider value={login}>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <Login setLogin={setLogin} />
                        </Route>
                        <Route path="/cadastro" exact>
                            <Login setLogin={setLogin} />
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
            </LoginContext.Provider>
        </>
    );
}
