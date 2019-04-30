const descendOrder = (datos) => {
  descendente.addEventListener('click', () => {
    const orderDescend = window.potter.Ascendente(datos);
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
      const student = window.potter.filtrarRolStudent(datos, rol.value);
      paintAll(student);
    } else if (rol.value === "hogwartsStaff") {
      const staff = window.potter.filtrarRolStaff(datos, rol.value);
      paintAll(staff);
    }
  });
};