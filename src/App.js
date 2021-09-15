import React from "react";

function Food({fav})
{
  return <h1>I Like {fav} </h1>;
}

function App() {
  return(
   <div>
      Hello!!
      <h1>OHHHHHHHH</h1> 
      <Food fav="kimchi" />  
      <Food fav="ramen" />  
      <Food fav="samgiopsal" />  
      <Food fav="chuk" />  
    </div>
  ); 
}

export default App;


