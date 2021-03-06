import React from 'react';

import LogoImg from '../../assets/images/Logo.svg';
import landingImg from '../../assets/images/landing.svg';


import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon  from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon  from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing(){
    return(
       <div id="page-landing">
           <div id="page-landing-content" className="container">
            <div id="div" className="logo-container">
            <img src={LogoImg} alt="Poffy"/>
            <h2>Sua plataforma de estudos online.</h2>
            </div>

            <img 
            src={landingImg} 
            alt="Plataforma de estudos" 
            className="hero-image"
            />

            <div id="" className="buttons-container">
            <a href="" className="give-classes">
            <img   src={studyIcon} alt="Estudar"/>
            Estudar
            </a>
            
            <a href="" className="study">
            <img   src={giveClassesIcon} alt="Estudar"/>
            Estudar
            </a>
            </div>

         <span className="total-connections" >
       total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
         </span>
        </div>
      </div>
        
        
    )
}

export default Landing;