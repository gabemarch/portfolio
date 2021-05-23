import "./Button.scss";

const DefaultButton = (props) => {
  return <button className="default-button">{props.children}</button>;
};

export { DefaultButton };
