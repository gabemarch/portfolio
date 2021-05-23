import "./App.scss";
import { AboutPage } from "./Pages/About/AboutPage";
import { ContactPage } from "./Pages/Contact/ContactPage";
import { ExperiencesPage } from "./Pages/Experiences/Experiences";
import { HobbiesPage } from "./Pages/Hobbies/Hobbies";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <LandingPage />
        <AboutPage />
        <ExperiencesPage />
        <HobbiesPage />
        <ContactPage />
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" component={AboutPage} />
      </HashRouter>
    </div>
  );
}

export default App;
