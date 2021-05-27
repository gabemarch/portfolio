import { CardItem } from "../../components/CardItem/CardItem";
import "./Experiences.scss";

export const ExperiencesPage = () => {
  return (
    <div className="experiences" id="experiences">
      <h1 className="experiences-title">Experiences</h1>
      <div className="experiences-title-underline"></div>
      <div className="experiences-recent-work">
        <CardItem title={"SmartBabee"} description="asdasdasd" />
        <CardItem title={"Project Backlog"} description="asdasdasd" />
        <CardItem
          title={"Tündér Varázs Szépségszalon"}
          description="asdasdasd"
        />
      </div>
      <div className="experiences-skills">
        <h3 className="experiences-skills-title">Skills</h3>
        <ul className="experiences-skills-list">
          <li className="experiences-skills-list-item">HTML</li>
          <li className="experiences-skills-list-item">CSS</li>
          <li className="experiences-skills-list-item">JavaScript</li>
          <li className="experiences-skills-list-item">React</li>
          <li className="experiences-skills-list-item">React Native</li>
          <li className="experiences-skills-list-item">Redux</li>
        </ul>
      </div>
    </div>
  );
};
