import "./App.scss";
import { AboutPage } from "./Pages/About/AboutPage";
import { ContactPage } from "./Pages/Contact/ContactPage";
import { ExperiencesPage } from "./Pages/Experiences/Experiences";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { ProcessesPage } from "./Pages/Processes/Processes";

function App() {
  return (
    <div className="App" style={{ overflow: "auto" }}>
      <LandingPage />
      <AboutPage />
      <ProcessesPage />
      <ExperiencesPage />
      <ContactPage />
    </div>
  );
}

export default App;
