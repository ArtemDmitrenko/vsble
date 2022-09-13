import { Link } from "react-router-dom";

import "./404.scss";

const Custom404 = () => (
  <div className="custom404">
    <div className="custom404__card">
      <h1>Ой! Данная страница не найдена :( </h1>
      <h2>
        <Link to="/" className="custom404__link" tabIndex={0}>
          Вернуться на главную
        </Link>
      </h2>
    </div>
  </div>
);

export default Custom404;
