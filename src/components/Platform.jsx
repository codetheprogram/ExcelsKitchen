import React from 'react'
import Food1 from '../assets/Food1.png'
import Food2 from '../assets/Food2.png'
import Food3 from '../assets/Food3.png'
import Food4 from '../assets/Food4.png'


const Platform = () => {
  return (
    <>
    
      <div id='Wheel-description'>
        <div id='des-containerA'>
        <p id='first-description'>#1 Most loved dish</p>
        <p id='second-descriptionA'>LETTUCE</p>
        <p id='second-descriptionB'>PAK BEEF</p>
        </div>
        <div id='des-containerB'>
        <p id='first-description'>#2 Most loved dish</p>
        <p id='second-descriptionA'>SUSHI</p>
        <p id='second-descriptionB'>DE SALA</p>
        </div>
        <div id='des-containerC'>
        <p id='first-description'>#3 Most loved dish</p>
        <p id='second-descriptionA'>TOASTU</p>
        <p id='second-descriptionB'>AL SOAO</p>
        </div>
        <div id='des-containerD'>
        <p id='first-description'>#4 Most loved dish</p>
        <p id='second-descriptionA'>BETA</p>
        <p id='second-descriptionB'>JELLOF</p>
        </div>
        <p id='order'>Order food</p>
      </div>
      <div id='Food-description'>
          <div id="food1-description">
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
          <div id="food2-description">
            <h1 id='food-head'>Overview</h1>
            <p id='rate'>4.5</p>
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
          <div id="food3-description">
            <h1 id='food-head'>Overview</h1>
            <p id='rate'>4.6</p>
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
          <div id="food4-description">
            <h1 id='food-head'>Overview</h1>
            <p id='rate'>4.8</p>
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
        <div id='Wheel'>
        <img className='food1' src={Food1} />
        <img className='food2' src={Food2} />
        <img className='food3' src={Food3} />
        <img className='food4' src={Food4} />
      </div>

    </>
  )
}

export default Platform