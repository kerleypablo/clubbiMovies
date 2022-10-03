import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Homepage from './page/HomePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" element={<Homepage />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
