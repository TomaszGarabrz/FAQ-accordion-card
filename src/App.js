import React, {useState} from "react";


import boxImg from './images/illustration-box-desktop.svg';
import bgImg from './images/bg-pattern-desktop.svg';
import imgWomen from './images/illustration-woman-online-desktop.svg'
import {ReactComponent as Arrow} from './images/icon-arrow-down.svg'

import { faqValue } from "./data";
import { FaqWrapper, Wrapper } from "./styled";


const App = () => {


  const [activeElement, setActiveElement] = useState();
 


  const handleListElements = (id) => {
    setActiveElement(id);

    if(activeElement === id) {
      setActiveElement()
    }

  }

  return (
    <Wrapper>
     <FaqWrapper>
        <div className="img__wrapper">
          <div className="hidden">
            <img className="img__bg" src={bgImg} alt=""/>
            <img className="img__woman" src={imgWomen} alt="" />
          </div>
          <img className="img__box" src={boxImg} alt="" />
        </div>
        
        <div className="faq__content">
            <h1 className="faq__content-title">FAQ</h1>
            <ul className="faq__content__list">


              {faqValue.map(item => {
                const {id, title, content} = item;
                return (
                  <li key={id} className="list__item">
                  <div className="list__item__title">
                    <p  className={`list__item__title-text ${activeElement === id ? 'active' : ''}`}>{title}</p>

                    <button onClick={() => handleListElements(id)} className={`list__item__title-button ${activeElement === id ? 'active' : ''}`}>
                      
                      <Arrow/>
                    </button>
                  </div>
                  <div className={`item__text ${activeElement === id ? 'show' : 'hidden'}`}>
                    <p>{content}</p>
                  </div>
                </li>
                )
              })}
            </ul>
        </div>
     </FaqWrapper>
    </Wrapper>
  );
}

export default App;


