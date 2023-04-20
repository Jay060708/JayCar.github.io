const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);

const brand = urlParams.get("brand");
const model = urlParams.get("model");

console.log(model);

var brandData = carData.find(brands => brands.brand == brand);
var modelData = brandData.models.find(models => models.name == model);

// Change the Brand name
document.getElementById("brand").innerHTML = brand.toUpperCase();
document.getElementById("model").innerHTML = model.toUpperCase();

document.getElementById(
  "mainImg"
).style.backgroundImage = `url(${modelData.mainImg})`;


document.getElementById("exterior-options-container").innerHTML = modelData.option1
  .map(
    option =>
      `   <div class="w3-col m3" style="padding:0;  color: white;
      ">
      <button style="display:flex;width:100px;height:100px;background-color:${option.color};border: 1px solid black"
      onclick="changeImage('${option.image}')">
      
      
  </div>
  </div>`
  )
  .join("");

  function changeImage(image) {
    document.getElementById("mainImg").style.backgroundImage = `url(${image})`;
}