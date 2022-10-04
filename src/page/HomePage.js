import React from 'react';
import Header from '../Components/Header';
import Card from '../Components/Card';
import { imgFilm, imgActor, imglocation } from '../helper/images';
import './Styles/HomePage.css';

export default function Homepage() {
  return (
    <div>
      <Header title="ClubbiMovies" />
      <section className="section_box">
        <Card img={imgFilm} title="Filmes" page="filmes" />
        <Card img={imgActor} title="Atores/Atrizes" page="atores" />
        <Card img={imglocation} title="Locacao" page="locacao" />
      </section>
    </div>
  );
}
