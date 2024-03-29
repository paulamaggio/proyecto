import { Switch, Route } from 'react-router-dom';
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header";
import Home from './screens/Home';
import Favoritos from './screens/Favoritos';
import Populares from './screens/Populares';
import Cartelera from './screens/Cartelera';
import NotFound from './screens/NotFound';
import Detalle from './screens/Detalle';



function App() {
  return (
    <div>
      <Header/>

      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/favoritos'} component={Favoritos} />
        <Route path={'/populares'} component={Populares} />
        <Route path={'/cartelera'} component={Cartelera} />
        <Route path = {'/detalle/id/:id'} component = {Detalle} />
        <Route component={NotFound}/>
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;
