import { useEffect } from 'react';
import style from './loading.module.css';

const Loading = () => {

   useEffect(() => {
    console.log("Render del componente Loading")
  })

  return (
    <div className={style.main_container}>
      <div className={style.cube}>
        <div className={style.top}></div>
        <div>
          <span style={{'--i':0}}></span>
          <span style={{'--i':1}}></span>
          <span style={{'--i':2}}></span>
          <span style={{'--i':3}}></span>
        </div>
      </div>
      <div className={style.special_mention}>By Muhammad Irshad, <a target={'_blank'} rel={'noreferrer'} href='https://www.youtube.com/c/OnlineTutorials4Designers/about'>Online Tutorials</a></div>
    </div>
  )
}

export default Loading;