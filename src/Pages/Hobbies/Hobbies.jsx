import { useTranslation } from "react-i18next";
import "./Hobbies.scss";
import reading_illustration from "../../assets/images/flat_room.png";

export const HobbiesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="hobbies-page">
      <h1 className="hobbies-page-section-title">{t("hobbyPage.myHobbies")}</h1>
      <div className="hobbies-page-section-title_underline"></div>
      <img
        src={reading_illustration}
        alt="man watches his phone"
        className="hobbies-page-illustration"
      />
      <ul className="hobbies-page-list">
        <li className="hobbies-page-list-item">{t("hobbyPage.guitar")}</li>
        <li className="hobbies-page-list-item">{t("hobbyPage.reading")}</li>
        <li className="hobbies-page-list-item">{t("hobbyPage.comics")}</li>
        <li className="hobbies-page-list-item">{t("hobbyPage.videogames")}</li>
        <li className="hobbies-page-list-item">{t("hobbyPage.blogging")}</li>
      </ul>
    </div>
  );
};
