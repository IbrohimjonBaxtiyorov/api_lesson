import { elContainer, elLoader } from "./html-elements.js";

export function uiRender({ data }) {
  elLoader.classList.add("hidden");
  
  data.forEach((element) => {
    const { description, name, price, brand } = element;

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
