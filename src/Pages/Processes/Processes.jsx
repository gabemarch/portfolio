import { useTranslation } from "react-i18next";
import "./Processes.scss";
import Creativity from "../../assets/images/creativity.svg";
import Lightbulb from "../../assets/images/lightbulb.svg";
import Plan from "../../assets/images/plan.svg";
import WebProgramming from "../../assets/images/web-programming.svg";

export const ProcessesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="processes-page">
      <h1 className="processes-page-title">
        {t("processesPage.developingYourFuture")}
      </h1>
      <div className="processes-page-underline"></div>
      <p className="processes-page-description">
        {t("processesPage.description")}
      </p>
      <div className="processes-page-icons">
        <div className="icon-idea">
          <img src={Lightbulb} alt="" />
          <p className="icon-title">{t("processesPage.idea")}</p>
        </div>
        <div className="icon-plan">
          <img src={Plan} alt="" />
          <p className="icon-title">{t("processesPage.planning")}</p>
        </div>
        <div className="icon-creativity">
          <img src={Creativity} alt="creativity" />
          <p className="icon-title">{t("processesPage.design")}</p>
        </div>
        <div className="icon-development">
          <img src={WebProgramming} alt="" />
          <p className="icon-title">{t("processesPage.development")}</p>
        </div>
      </div>
    </div>
  );
};
