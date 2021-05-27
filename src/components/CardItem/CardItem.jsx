import { DefaultButton } from "../../elements/Buttons/Button";
import "./CardItem.scss";

export const CardItem = (props) => {
  return (
    <div className="card">
      <h3 className="card-title">{props.title}</h3>
      <p className="card-description">{props.description}</p>
      <DefaultButton>More</DefaultButton>
    </div>
  );
};
