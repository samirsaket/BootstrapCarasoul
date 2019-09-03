import React from 'react';
//import img1 from '../../src/Images/Infosys.jpg'
import './card-style.css'

const Card = props => {
 return(
   <div className="card text-center shadow"> 
      <div className="overflow">
          <img src={props.imgsrc} alt='Image 1' className="card-img-top" />
      </div>
   </div>  


 );
}

export default Card;