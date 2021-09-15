import React from "react";

function Food({name, picture})
{
  return <div>
      <h2>I Like {name}</h2>
      <img src={picture}/>
  </div>
}

const foodILike = [
  {
    name: "kimchi",
    image: "http://health.chosun.com/site/data/img_dir/2020/07/21/2020072103114_0.jpg"
  },
  {
    name: "Kimbap",
    image: "https://mblogthumb-phinf.pstatic.net/MjAxODAyMDNfNTMg/MDAxNTE3NjU4OTc5MjQ1.ZKPcsvt3m0aSDIZMzRvIFJCsOGcM0pdPmUmoeDgeLkMg.Xma30vr2wbDhIa8J8276fsWKB0elqmcoaUdHk62k8IQg.JPEG.yuki5619/P1420687.JPG?type=w2"
  }
];

function App() {
  return(
   <div>
      <h1>OHHHHHHHH</h1> 
      {foodILike.map(dish =>(
          <Food name={dish.name} picture={dish.image}/>
      ))}
    </div>
  ); 
}

export default App;


