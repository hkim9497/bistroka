import React, {Component} from 'React';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import Appetizers from './components/Appetizers.jsx';
import Tempura from './components/Tempura.jsx';
import Yakitori from './components/Yakitori.jsx';
import Makimono from './components/Makimono.jsx';
import OrderSummary from './components/OrderSummary.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>x
          <Route exact={true} path="/" component={HomePage}/>
          <Route exact path='/Appetizers' component={Appetizers} />
          <Route exact path='/Tempura' component={Tempura} />
          <Route exact path='/Yakitori' component={Yakitori} />
          <Route exact path='/Makimono' component={Makimono} />
          <Route exact path='/checkout' component={OrderSummary} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
