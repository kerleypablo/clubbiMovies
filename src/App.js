import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Homepage from './page/HomePage';
import FilmPage from './page/FilmsPage';
import Actorpage from './page/ActorPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/filmes" element={<FilmPage />} />
          <Route exact path="/atores" element={<Actorpage />} />
          <Route exact path="/locacao" element={' '} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
