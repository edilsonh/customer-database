let b = `${customers.results[1].gender}`;
console.log(b);

let templateHolder = [];

customers.results.forEach(function(item){

  let template =
  `
  <article class="people">
    <img src="${item.picture.large}">
    <h3>${item.name.first} ${item.name.last}</h3>
    <p>${item.email}</p>
    <p>${item.location.street}</p>
    <p>${item.location.city}, ${item.location.state} ${item.location.postcode}</p>
    <p>${item.cell}</p>
  </article>
  `;
  templateHolder += template;
  //console.log(template);

});

console.log(templateHolder);


let container = document.querySelector(".container");
container.innerHTML = templateHolder;
