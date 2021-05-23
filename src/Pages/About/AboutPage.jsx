import { useTranslation } from "react-i18next";

export const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div className="about-page">
      <h1 className="about-page_section-title">{t("aboutPage.whoAmI")}</h1>
    </div>
  );
};
