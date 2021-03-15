import Home from './Home'
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    
      <BrowserRouter basename={process.env.PUBLIC_URL} >
          <Route exact path="/" component ={Home} />
        {/* <Home></Home>     */}
      </BrowserRouter>
  )
  }

export default App;
