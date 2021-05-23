import { CardItem } from "../../components/CardItem/CardItem";

export const ExperiencesPage = () => {
  return (
    <div className="experiences">
      <h1 className="experiences-title">Experiences</h1>
      <h3 className="experiences-skills-title">Skills</h3>
      <div className="experiences-left-side">
        <CardItem title={"SmartBabee"} description="asdasdasd" />
        <CardItem title={"Project Backlog"} description="asdasdasd" />
      </div>
      <div className="experiences-right-side">
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
