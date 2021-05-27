import { useTranslation } from "react-i18next";
import { HobbiesPage } from "../Hobbies/Hobbies";
import "./AboutPage.scss";

export const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="about-page">
      <h1 className="about-page-section-title">{t("aboutPage.whoAmI")}</h1>
      <div className="about-page-section-title_underline"></div>
      <div className="about-page-description">
        <p className="about-page-description-paragraph">
          {t("aboutPage.aboutDesc")}
        </p>
        <p className="about-page-description-paragraph">
          {t("aboutPage.aboutDescParagraph")}
        </p>
      </div>

      <HobbiesPage />
    </div>
  );
};
