import GlobalStyle from "../css/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Login from "./login/Login";
import SignUp from "./login/SignUp";
import Habits from "./habits/Habits";
import HabitsToday from "./habitsToday/HabitsToday";
import History from "./history/History";
import LoginContext from "../contexts/LoginContext";
import ProgressContext from "../contexts/ProgressContext";

export default function App() {
    const [login, setLogin] = useState({});

    const [progress, setProgress] = useState(0);

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
                            <SignUp />
                        </Route>
                        <ProgressContext.Provider
                            value={{ progress, setProgress }}
                        >
                            <Route path="/habitos" exact>
                                <Habits />
                            </Route>
                            <Route path="/hoje" exact>
                                <HabitsToday
                                    progress={progress}
                                    setProgress={setProgress}
                                />
                            </Route>
                            <Route path="/historico" exact>
                                <History />
                            </Route>
                        </ProgressContext.Provider>
                    </Switch>
                </Router>
            </LoginContext.Provider>
        </>
    );
}
