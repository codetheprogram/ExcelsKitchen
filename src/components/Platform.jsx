import React from 'react'
import { useRef } from 'react'
import Food1 from '../assets/Food1.png'
import Food2 from '../assets/Food2.png'
import Food3 from '../assets/Food3.png'
import Food4 from '../assets/Food4.png'
import Chatbox from '../assets/Chatbox.png'
import Cuttlery from '../assets/Cuttlery.png'
import Profile from '../assets/Profile.png'
import Wine from '../assets/Wine.png'
import Mic from '../assets/Mic.png'


const Platform = () => {
  const element = useRef(null);
  const element2 = useRef(null);
  const element3 = useRef(null);
  const element4 = useRef(null);
  const element5 = useRef(null);
  const element6 = useRef(null);
  const element7 = useRef(null);
  const element8 = useRef(null);
  const element9 = useRef(null);
  const element10 = useRef(null);
  
  const DisplaceA = () => {
    element.current.className = 'selectorA';
    element2.current.style = 'transform: rotate(205deg)';
    element3.current.style = 'opacity: 1';
    element4.current.style = 'opacity: 0';
    element5.current.style = 'opacity: 0';
    element6.current.style = 'opacity: 0';
    element7.current.className = 'appear';
    element8.current.className = 'disappear';
    element9.current.className = 'disappear';
    element10.current.className = 'disappear';
  }
    const DisplaceB = () => {
   element.current.className = 'selectorB';
   element2.current.style = 'transform: rotate(90deg)';
   element3.current.style = 'opacity: 0';
    element4.current.style = 'opacity: 1';
    element5.current.style = 'opacity: 0';
    element6.current.style = 'opacity: 0';
     element7.current.className = 'disappear';
    element8.current.className = 'appear';
    element9.current.className = 'disappear';
    element10.current.className = 'disappear';
  }
   const DisplaceC = () => {
    element.current.className = 'selectorC';
    element2.current.style = 'transform: rotate(15deg)';
    element3.current.style = 'opacity: 0';
    element4.current.style = 'opacity: 0';
    element5.current.style = 'opacity: 1';
    element6.current.style = 'opacity: 0';
     element7.current.className = 'disappear';
    element8.current.className = 'disappear';
    element9.current.className = 'appear';
    element10.current.className = 'disappear';
  }
   const DisplaceD = () => {
    element.current.className = 'selectorD';
    element2.current.style = 'transform: rotate(-79deg)';
    element3.current.style = 'opacity: 0';
    element4.current.style = 'opacity: 0';
    element5.current.style = 'opacity: 0';
    element6.current.style = 'opacity: 1';
     element7.current.className = 'disappear';
    element8.current.className = 'disappear';
    element9.current.className = 'disappear';
    element10.current.className = 'appear';
  }
  return (
    <>
    
      <div id='Wheel-description'>
        <div id='des-containerA' ref={element3}>
        <p id='first-description'>#1 Most loved dish</p>
        <p id='second-descriptionA'>LETTUCE</p>
        <p id='second-descriptionB'>PAK BEEF</p>
        </div>
        <div id='des-containerB' ref={element4}>
        <p id='first-description'>#2 Most loved dish</p>
        <p id='second-descriptionA'>SUSHI</p>
        <p id='second-descriptionB'>DE SALA</p>
        </div>
        <div id='des-containerC' ref={element5}>
                  <p id='first-description'>#4 Most loved dish</p>
        <p id='second-descriptionA'>BETA</p>
        <p id='second-descriptionB'>JELLOF</p>
        
        </div>
        <div id='des-containerD' ref={element6}>
    <p id='first-description'>#3 Most loved dish</p>
        <p id='second-descriptionA'>TOASTU</p>
        <p id='second-descriptionB'>AL SOAO</p>
        </div>
        <p id='order'>Order food</p>
      </div>
      <div id='Food-description'>
          <div id="food1-description" className='appear' ref={element7}>
            <h1 id='food-head'>Overview</h1>
            <div id='rate'><p >4.9</p></div>
            <div id='chef'><p>Chef Ain Delae</p></div>
            <div id='food-text'><p>
              The standard lorem ipsum passage has been a printer's
               friend for centuries. Like stock photos today, it served as a 
               placeholder for actual content.
              </p></div>
              <div id='L-D'>
                <button id='like'>Like &#128077;</button>
                <button id='dislike'>Dislike &#128078;</button>
              </div>
          </div>
          <div id="food2-description" className='disappear' ref={element8}>
            <h1 id='food-head'>Overview</h1>
            <div id='rate'><p >4.5</p></div>
            <div id='chef'><p>Chef Finela</p></div>
            <div id='food-text'><p>
              The standard lorem ipsum passage has been a printer's
               friend for centuries. Like stock photos today, it served as a 
               placeholder for actual content.
              </p></div>
              <div id='L-D'>
                <button id='like'>Like &#128077;</button>
                <button id='dislike'>Dislike &#128078;</button>
              </div>
          </div>
          <div id="food3-description" className='disappear' ref={element9}>
            <h1 id='food-head'>Overview</h1>
            <div id='rate'><p >4.6</p></div>
            <div id='chef'><p>Chef King Crimson</p></div>
            <div id='food-text'><p>
              The standard lorem ipsum passage has been a printer's
               friend for centuries. Like stock photos today, it served as a 
               placeholder for actual content.
              </p></div>
              <div id='L-D'>
                <button id='like'>Like &#128077;</button>
                <button id='dislike'>Dislike &#128078;</button>
              </div>
          </div>
          <div id="food4-description" className='disappear' ref={element10}>
            <h1 id='food-head'>Overview</h1>
            <div id='rate'><p >4.8</p></div>
            <div id='chef'><p>Chef Jotaro</p></div>
            <div id='food-text'><p>
              The standard lorem ipsum passage has been a printer's
               friend for centuries. Like stock photos today, it served as a 
               placeholder for actual content.
              </p></div>
              <div id='L-D'>
                <button id='like'>Like &#128077;</button>
                <button id='dislike'>Dislike &#128078;</button>
              </div>
          </div>
      </div>
      <div id='Options'>
        <div id='selector' ref={element} className='selectorA'></div>
        <button onClick={DisplaceA} id='first'>
          <img src={Food1}/>
        </button>
        <button onClick={DisplaceB} id='second'>
          <img src={Food2}/>
        </button>
        <button onClick={DisplaceC} id='third'>
          <img src={Food4}/>
        </button>
        <button onClick={DisplaceD} id='fourth'>
          <img src={Food3}/>
        </button>
      </div>

      <div id='Options-D'>
        <button  id='cuttlery'>
          <img src={Chatbox}/>
        </button>
        <button  id='wine'>
          <img src={Cuttlery}/>
        </button>
        <button id='chatbox'>
          <img src={Profile}/>
        </button>
        <button id='profile'>
          <img src={Wine}/>
        </button>
         <button id='mic'>
          <img src={Mic}/>
        </button>
      </div>
        <div id='Wheel' ref={element2}>
        <img className='food1' src={Food1} />
        <img className='food2' src={Food2} />
        <img className='food3' src={Food3} />
        <img className='food4' src={Food4} />
      </div>

    </>
  )
}

export default Platform