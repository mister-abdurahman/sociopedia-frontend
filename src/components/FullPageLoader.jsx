import svg from "../images/icons.svg";

function FullPageLoader() {
  return (
    <div className="fullpage-loader-container">
      <svg className="loader-svg">
        <use href={`${svg}#icon-loader`}></use>
      </svg>
    </div>
  );
}

export default FullPageLoader;
