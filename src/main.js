/* Manejo del DOM */

const data = document.getElementById('data');
const genero = document.getElementById('genero');
const casa = document.getElementById('casa');
const rol = document.getElementById('rol');
const ascendente = document.getElementById('ascendente');
const descendente = document.getElementById('descendente');


const dataJSON = () => {
    fetch('https://raw.githubusercontent.com/Laboratoria/LIM009-DL-2.0/master/src/data/potter.json')
      .then(res => res.json())
      .then(datos => {
        console.log(datos);
        paintAll(datos);
        filterGener(datos);
        filterHouse(datos);
        filterRol(datos);
        ascendOrder(datos);
        descendOrder(datos);
      });
  };
  dataJSON();
  
const paintAll = (datos) => {
    let all ='';
    for (let i = 0; i < datos.length; i++) {
        all += `
        <div class="cards">
        <figure class="cards-img"><img src= ${datos[i].image} /></figure>
        <div class="text"><p><strong>${datos[i].name}</strong></p>
        <p>${datos[i].house ? datos[i].house : 'No tiene casa'}</p></div>
        <div class="texto">
        <p>Especie</br><strong>${datos[i].species}</strong></p>
        <p>Rol</br><strong>${datos[i].hogwartsStudent ? 'Estudiante' : 'Staff'}</strong></p>
        `;
      if(typeof datos[i].yearOfBirth === 'number'){
        all += 
        `<div><p>Edad</br><strong>${2019 - datos[i].yearOfBirth}</strong></p></div>`;
      }else {
        all += `<p>No tiene fecha de nacimiento</p>`; 
      }
      all += `<p>Actor</br><strong>${datos[i].actor}</strong></p></div>
      </div>`;
    };
     data.innerHTML = all;
  };

  const ascendOrder = (datos) => {
    ascendente.addEventListener('click', () => {
      const orderAscend = potter.Descendente(datos);
      paintAll(orderAscend); 
    });
  };
  
  const descendOrder = (datos) => {
    descendente.addEventListener('click', () => {
      const orderDescend = potter.Ascendente(datos);
      paintAll(orderDescend);
    });
  };

  const filterGener = (datos) => {
    genero.addEventListener('change', () => {
      const paintGener = window.potter.filtrarGenero(datos, genero.value);
      paintAll(paintGener);
    });
  };
  
  const filterHouse = (datos) => {
    casa.addEventListener('change', () => {
      const paintHouse = window.potter.filtrarCasa(datos, casa.value);
      paintAll(paintHouse);
    });
  };
  
  const filterRol = (datos) => {
    rol.addEventListener('change', () => {
      if (rol.value === "hogwartsStudent") {
        const student = potter.filtrarRolStudent(datos, rol.value);
        paintAll(student);
      } else if (rol.value === "hogwartsStaff") {
        const staff = potter.filtrarRolStaff(datos, rol.value);
        paintAll(staff);
      } 
    });
  };
  
