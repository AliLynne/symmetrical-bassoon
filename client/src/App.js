import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTag from "./components/AddTag";
import AddTagEvent from "./components/AddTagEvent";

import EventsByTag from "./pages/EventsByTag";
import TagsByEvent from "./pages/TagsByEvent";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="main">
          <Switch>
            <Route path="/eventsByTag">
              <EventsByTag />
            </Route>
            <Route path="/tagsByEvent">
              <TagsByEvent />
            </Route>
            <Route path="/addTag">
              <AddTag />
            </Route>
            <Route path="/">
              <AddTagEvent />
            </Route>
          </Switch>
        </main>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
