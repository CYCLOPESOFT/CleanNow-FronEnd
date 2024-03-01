import React, { useState } from "react";

const Landing = () => {
  const [isAnimating, setAnimating] = useState(false);

  const animationAction = () => {
    setAnimating(true);
  };

  const onAnimationEnd = () => {
    setAnimating(false);
  };

  return (
    <div className="flex w-full justify-center items-center h-screen dark:bg-gray-900">
      <div className="w-96 p-4">
        <div
          id="animation"
          className={`bg-appColor flex justify-center items-center cursor-pointer p-12 rounded-2xl ${
            isAnimating
              ? "animate-ping animate-once animate-duration-1000 animate-fill-forwards"
              : ""
          }`}
          onClick={animationAction}
          onAnimationEnd={onAnimationEnd}
        >
          <img src="src/assets/images/landing_logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
