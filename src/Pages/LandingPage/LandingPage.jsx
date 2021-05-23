import { useTranslation } from "react-i18next";
import { DefaultButton } from "../../elements/Buttons/Button";
import { Navbar } from "../../components/Navbar/Navbar";
import "./LandingPage.scss";

export const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <div className="landing-page">
      <Navbar />
      <div className="landing-page-titles">
        <h1 className="landing-page-title-name">{t("landingPage.name")}</h1>
        <h1 className="landing-page-subtitle">
          {t("landingPage.webDeveloper")}
        </h1>
      </div>
      <DefaultButton> Let's See</DefaultButton>
    </div>
  );
};
