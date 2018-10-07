import React from 'react';

const Scroll=(prop)=>{

  return (<div style={{overflow:'scroll',height:'600px'}}>
    {console.log(prop.store)}
    {prop.children}
  </div>);
}
export default Scroll;
