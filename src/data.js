/* Manejo de data */

const Descendente = (datos) => {
  const order = datos.sort((a, b) => {
    if (a.yearOfBirth >= b.yearOfBirth) {
      return 1;
    } else {
      return -1;
    }
  });
  return order;
};

const Ascendente = (datos) => {
  const ordenar = datos.sort((a, b) => {
    if (a.yearOfBirth <= b.yearOfBirth) {
      return 1;
    } else {
      return -1;
    }
  });
  return ordenar;
};

const filtrarGenero = (datos, genero) => {
  const newGener = datos.filter(elemento => elemento.gender === genero);
  return newGener;
};


const filtrarCasa = (datos, casa) => {
  const newHouse = datos.filter(elemento => elemento.house === casa);
  return newHouse;
};

const filtrarRolStudent = (datos) => {
  const newStudent = datos.filter(elemento => elemento.hogwartsStudent);
  return newStudent;
};

const filtrarRolStaff = (datos) => {
  const newStaff = datos.filter(element => element.hogwartsStaff);
  return newStaff;
};

window.potter = {
  filtrarGenero,
  filtrarCasa,
  filtrarRolStudent,
  filtrarRolStaff,
  Descendente,
  Ascendente
};