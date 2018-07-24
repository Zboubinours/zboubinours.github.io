import React, {Component} from 'react';
import logo from './img/kitty.svg';
import './App.css';
import Header from './components/header';
import CVEntry from './components/cv_entry';
import Lorem from './components/lorem';

class App extends Component {
  render() {
    return (
      <div>
        <Header logo={logo}/>
        <div class="container">
          <h1>Formations</h1>
          <CVEntry
            begin="2015"
            end="2020"
            university="École Pour l'Informatique et les Techniques Avancées"
            degree="EPITA"
            location="Le Kremlin-Bicêtre (94270)"
            description="2ème année de cycle ingénieur (4ème année d’école) à partir de septembre"/>
          <hr/>
          <CVEntry
            begin="01/2017"
            end="07/2017"
            university="Stellenbosch University"
            degree="Academic exchange"
            location="Stellenbosch, Afrique du Sud"
            description="Engineering faculty (Computer Science, Computer Systems, Engineering Mathematics)"/>
          <hr/>
          <CVEntry
            begin="2011"
            end="2014"
            university="Lycée Frédéric Joliot-Curie"
            degree="Baccalauréat Général S/SVT"
            location="Dammarie-les-Lys (77190), France"
            description="Mention Bien, spécialité mathématiques"/>
          <hr/>
          <h1>Expériences professionnelles</h1>
          <CVEntry
            begin="08/2016"
            end="12/2016"
            university="Stagiaire"
            degree="FrAndroid"
            location="Paris (75010), France"
            description="Rédaction d'articles au quotidien, de dossiers, de
            tests de smartphones, box TV sous Android, etc., présentation de
            vidéos sur YouTube, montage de vidéos à destination des réseaux
            sociaux."/>
          <hr/>
          <CVEntry
            begin="2011"
            end=""
            university="Stagiaire"
            degree="Finances Publiques"
            location="Évry (91000), France"
            description="Stage de troisième au sein du service informatique de
            la Direction Départementale des Finances Publiques d’Évry."/>
          <hr/>
        </div>
      </div>
    )
  }
}

export default App;
