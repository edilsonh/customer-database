let templateHolder = [];

customers.results.forEach(function(item){

  let template =
  `
  <article class="people">
    <img src="${item.picture.large}">
    <h3><span>${item.name.first} ${item.name.last}</span></h3>
    <p>${item.email}</p>
    <p>${item.location.street}</p>
    <p>${item.location.city}, ${item.location.state} ${item.location.postcode}</p>
    <p>${item.cell}</p>
  </article>
  `;
  templateHolder += template;

});


let container = document.querySelector(".container");
container.innerHTML = templateHolder;
