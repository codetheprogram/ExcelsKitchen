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
        {/* <div id='des-containerB'>
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
        </div> */}
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