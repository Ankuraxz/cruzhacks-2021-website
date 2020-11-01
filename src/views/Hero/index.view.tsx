import React from "react";
import cx from "classnames";
import PostcardStack from "components/PostcardStack/index.view";

import EmailSubscriptionForm from "components/EmailSubscription/index.view";
import "./Hero.scss";

interface HeroProps {
  pageName: string;
  title: string;
  description: string;
}

const HeroView: React.FC<HeroProps> = ({
  pageName,
  title,
  description,
}: HeroProps) => {
  return (
    <div
      className={cx("HeroView", { HeroView__homeView: pageName === "Home" })}
    >
      <div className="HeroView__container">
        <div className="HeroView__visual">
          <PostcardStack pageName={pageName} />
        </div>
        <div className="HeroView__textContainer">
          <h1 className="HeroView__titleText">CruzHacks 2021 /</h1>
          <h1 className="HeroView__titleText--secondary">{title}</h1>
          <p className="HeroView__description">{description}</p>
          <EmailSubscriptionForm />
        </div>
      </div>
    </div>
  );
};

export default HeroView;