/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/*
const example = () => {
  return 'example';
};

window.example = example;
*/
/*
const data = document.getElementById('data');
function getData() {
  fetch('https://raw.githubusercontent.com/Laboratoria/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res => res.json())
    .then(dato => {
      //console.log(dato);
      data.innerHTML = `
      <img src="${dato[1].image}" width="100px" class="img-fluid rounded-circle">
      <p>Nombre:${dato[1].name} </p>
      `
    })
};
*/
/*
const data = document.getElementById('data');
function getData() {
  fetch('https://raw.githubusercontent.com/Laboratoria/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res => res.json())
    .then(datos => {
      console.log(datos);
      data.innerHTML = `<div>
      <p>Nombre:${datos[0].name}</p>
      <p>Actor:${datos[0].actor}</p>
      <p>Casa:${datos[0].house}</p>
      <div>
        <img src= ${datos[0].image} />
      </div>
      </div>
      
      `
      paintAll(datos)
    })
};
*/
/*
function paint(datos){
  data.innerHTML= '';
  for(let i of datos){
    console.log(i);
    data.innerHTML += `
          <tr>
            <th scope='row'>${i.actor}</th>
            <td>${i.name}</td>
            <td>${i.gender}</td>
            <td>${i.house}</td>
          </tr>
    `
  }
}
*/
const data = document.getElementById('data');
function getData() {
  fetch('https://raw.githubusercontent.com/Laboratoria/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res => res.json())
    .then(res => { 
      for(let i = 0; i<res.length; i++){
        let ele = res[i];
        paintAll(ele)
      } 
    });
}

function paintAll(ele){
    let all = `<div class="mt-5" id='magic'>
      <p>Nombre:${ele.name}</p>
      <p>Actor:${ele.actor}</p>
      <p>Casa:${ele.house}</p>
      <div >
        <img src= ${ele.image} width="100px" class="img-fluid"/>
      </div>
      </div>
    `
  
  document.getElementById('data').innerHTML+= all;
}