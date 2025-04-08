import {
  elContainer,
  elTabFour,
  elTabOne,
  elTabSecond,
  elTabThree,
} from "./html-elements.js";

import {
  uiRender,
  uiRenderFour,
  uiRendersecond,
  uiRenderThree,
} from "./ui-render.js";

// Tab-1 
elTabOne.addEventListener("click", () => {
  elContainer.innerHTML = "";
  fetch("https://json-api.uz/api/project/fn37/products", { cache: "no-store" })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      uiRender(data);
    });
});

// Tab-2
elTabSecond.addEventListener("click", () => {
  elContainer.innerHTML = "";
  fetch("https://json-api.uz/api/project/fn37/students", { cache: "no-store" })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      uiRendersecond(data);
    });
});

// Tab-3
elTabThree.addEventListener("click", () => {
  elContainer.innerHTML = "";
  fetch("https://json-api.uz/api/project/fn37/animals", { cache: "no-store" })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      uiRenderThree(data);
    });
});

// Tab-4
elTabFour.addEventListener("click", () => {
  elContainer.innerHTML = "";
  fetch("https://json-api.uz/api/project/fn37/cars", { cache: "no-store" })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      uiRenderFour(data);
    });
});
