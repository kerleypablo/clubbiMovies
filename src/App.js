import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Homepage from './page/HomePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/filmes" element={' '} />
          <Route exact path="/atores" element={' '} />
          <Route exact path="/locacao" element={' '} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
