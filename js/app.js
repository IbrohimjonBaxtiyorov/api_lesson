
import { elTabFour, elTabOne, elTabSecond, elTabThree } from "./html-elements.js";
import { uiRender } from "./ui-render.js";
elTabOne.addEventListener("click" ,()=>{
  fetch("https://json-api.uz/api/project/fn37/products",{cache:"no-store"})
  .then((data) => {
      return data.json();
    }).then((data) => {
      uiRender(data)
      });
  
})

elTabSecond.addEventListener("click" ,()=>{
  fetch("https://json-api.uz/api/project/fn37/students",{cache:"no-store"})
  .then((data)=>{
    return data.json()
  }).then((data)=>{
   uiRender(data)
    
  })
  
})

elTabThree.addEventListener("click",()=>{
  fetch("https://json-api.uz/api/project/fn37/animals",{cache:"no-store"})
  .then((data)=>{
    return data.json()
  }).then((data)=>{
   uiRender(data)
    
  })
})

elTabFour.addEventListener("click",()=>{
  fetch("https://json-api.uz/api/project/fn37/cars",{cache:"no-store"})
  .then((data)=>{
    return data.json()
  }).then((data)=>{
   uiRender(data)
    
  })
})