var a = location.href;
var brand = a.substring(a.indexOf("?") + 1);

// Change the Brand name
document.getElementById("brandTitle").innerHTML = brand.toUpperCase();
console.log(carData);

var found = carData.find(brands => brands.brand == brand);

console.log(found);

document.getElementById(
  "brandImg"
).style.backgroundImage = `url(${found.mainImg})`;

// Modal Image Gallery
function onClickModel(element) {
  
  var model = element.id;
  
  window.location.href = `build.html?brand=${brand}&model=${model}`;
}

document.getElementById("modelList").innerHTML = found.models
  .map(
    model =>
      `   <div class="w3-col m4" style="padding:0;  color: black;
      ">
      <div style="position:relative">
      <img onclick="onClickModel(this)" id="${model.name}" src="${model.mainImg}" style="width:100%; height:250px; object-fit: cover;" onclick="onClick(this)"
          class="w3-hover-opacity" alt="The mist over the mountains">
          <div style="position: absolute;
          top: 20px;
          left: 20px;
          color: white;
          padding-left: 20px;
          padding-right: 20px;"><span style="font-size:30px;">${model.name}</span></div>
      </div>
      
  </div>`
  )
  .join("");
