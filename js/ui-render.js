import { elContainer, elLoader } from "./html-elements.js";

// Tab-1
 function uiRender({ data }) {
  elLoader.classList.add("hidden");

  data.forEach((element) => {
    const { description, price, brand } = element;

    elContainer.innerHTML += `
    <li>
   <div class="card bg-base-100 grid-cols-6 shadow-sm">
   <div class="card-body">
    <h2 class="card-title" >${brand}</h2>
  <p class="line-clamp-3">${description}</p>
   <div class="card-actions justify-end">
    <button class="btn btn-primary">${price}</button>
  </div>
</div>
</div>
    </li>`;
  });
  elContainer.classList.remove("hidden");
  elContainer.classList.toggle("grid");
}

// Tab-2
 function uiRendersecond({ data }) {
  elLoader.classList.add("hidden");

  data.forEach((element) => {
    const { description, school, age } = element;

    elContainer.innerHTML += `
    <li>
   <div class="card bg-base-100 grid-cols-6 shadow-sm">
   <div class="card-body">
    <h2 class="card-title" >Age ${age}</h2>
  <p class="line-clamp-3">${description}</p>
    <p class="line-clamp-2">${school}</p>
</div>
</div>
    </li>`;
  });
  elContainer.classList.remove("hidden");
  elContainer.classList.toggle("grid");
}

// Tab-3
 function uiRenderThree({ data }) {
  elLoader.classList.add("hidden");

  data.forEach((element) => {
    const { description, habitat, category } = element;
    elContainer.innerHTML += `
    <li>
   <div class="card bg-base-100 grid-cols-6 shadow-sm">
   <div class="card-body">
    <h2 class="card-title" >${category}</h2>
  <p class="line-clamp-3">${description}</p>
    <h5 class="line-clamp-1">${habitat}</h5>
</div>
</div>
    </li>`;
  });
  elContainer.classList.remove("hidden");
  elContainer.classList.toggle("grid");
}

// Tab-4
 function uiRenderFour({ data }) {
  elLoader.classList.add("hidden");
  data.forEach((element) => {
    const { description, price, category, brand } = element;
    elContainer.innerHTML += `
    <li>
   <div class="card bg-base-100 grid-cols-6 shadow-sm">
   <div class="card-body">
    <h2 class="card-title line-clamp-1 " >${brand}</h2>
    <h3 class="line-clamp-1">${category}</h3>
  <p class="line-clamp-2">${description}</p>
    <div class="card-actions justify-end">
    <button class="btn btn-primary">${price} $</button>
  </div>
</div>
</div>
    </li>`;
  });
  elContainer.classList.remove("hidden");
  elContainer.classList.toggle("grid");
}

export{uiRender,uiRenderFour,uiRenderThree,uiRendersecond}