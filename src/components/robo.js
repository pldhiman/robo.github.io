import React from 'react';
import 'tachyons';

const Card=({id,name,email})=>{
  
  return(

    <div className="tc grow bg-gold hover-blue dim h-auto br3 ma2 bw10 shadow-5 dib">
      <img alt="robo"src={`https://robohash.org/${id}?200*200"`}/>
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
    </div>


  );
};

export default Card;
