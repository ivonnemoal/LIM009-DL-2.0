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
    .then(data => data.json())
    .then(data => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        let age = 2019 - data[i].yearOfBirth;
        let ele = data[i];
        let genero = data[i].gender;
        paintAll(ele,age);
        //filterData(genero);
      }
    });
}

function paintAll(ele,age) {
  let all = `<div class="cards">
      <figure class="cards-img"><img src= ${ele.image} class=""/></figure>
      <div class="text"><p><strong>${ele.name}</strong></p>
      <p>${ele.house ? ele.house : 'No tiene casa'}</p></div>
      <div class="texto">
      <p>Especie</br><strong>${ele.species}</strong></p>
      <p>Rol</br><strong>${ele.hogwartsStudent ? 'Estudiante' : 'Staff'}</strong></p>
      <p>Edad</br><strong>${age !== 2019 ? age : 'No tiene fecha de nacimiento'}</strong></p>
      <p>Actor</br><strong>${ele.actor}</strong></p>
      </div>
      </div>
    `
  document.getElementById('data').innerHTML += all;
}


 function filterData(genero) { 
  if(genero !== 'male'){
    return genero;
  } else {
    return genero;
  }
}

const ordenarAZ = (a,b) => {
  if (a.name > b.name) {
    return 1;
  } else {
    return -1;
  }
};
