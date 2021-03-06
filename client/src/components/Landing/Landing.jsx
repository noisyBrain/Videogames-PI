import { Link } from "react-router-dom";
import style from './Landing.module.css'

const Landing = () => {

  return (
    <div className={style.main_container} >
      <Link to='/home'>
        <button className={style.landing_button}>
          <span>
            Let's play
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Landing;
