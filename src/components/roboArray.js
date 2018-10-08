import React from 'react';
import Card from './robo.js'


const RoboArray=({robots,props})=>{
  return(<div>
          {
            robots.map((val,i)=>{
            return (
              <Card
                key={[i]}  id={robots[i].id}
                   name={robots[i].name}
                   email={robots[i].email}
               />
             );
           })
          }
        </div>
  );
}

export default RoboArray;
