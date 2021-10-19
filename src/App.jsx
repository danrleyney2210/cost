import { Header } from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Company } from './components/Company'
import { Contato } from './components/Contato'
import { NewProject } from './components/NewProject'
import { Navbar } from "./components/Navbar"
import { Footer } from './components/Footer'
import { GlobalStyle } from "./styles/global";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/company">
          <Company />
        </Route>

        <Route exact path="/contato">
          <Contato />
        </Route>

        <Route exact path="/newProject">
          <NewProject />
        </Route>
      </Switch>
      <Footer />
    </Router>
  
  );
}

export default App;
