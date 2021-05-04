import Form from "./Form";
import Place from "./Place";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/add">Add Place</Link>
                        </li>
                        <li>
                            <Link to="/">View places</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/add">
                        <Form />
                    </Route>
                    <Route path="/">
                        <Place />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
