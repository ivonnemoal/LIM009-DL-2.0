global.window = global;
global.assert = 
require('./data.spec.js');
require('../src/data');


const inputGen = [{ name: "Hermayone", gender: "female"}, { name: "Harry Potter", gender: "male"}];
const conditionGen = "male";
const outputGen = [{ name: "Harry Potter", gender: "male"}];

const inputHom = [{ name: "Hermayone", house: "Gryffindor"}, { name: "Draco Malfoy", house: "Slytherin"}];
const conditionHom = "Slytherin";
const outputHom = [{ name: "Draco Malfoy", house: "Slytherin"}];

const inputStud = [{ name: "Draco Malfoy", hogwartsStudent: true}, { name: "Minerva McGonagall", hogwartsStudent: false }];
const conditionStud = "student";
const outputStud = [{ name: "Draco Malfoy", hogwartsStudent: true}];

const inputStaf = [{ name: "Draco Malfoy", hogwartsStaff: false}, { name: "Minerva McGonagall", hogwartsStaff: true }];
const conditionStaf = "staff";
const outputStaf = [{ name: "Minerva McGonagall", hogwartsStaff: true }];

const inputSort1 = [{ "yearOfBirth": 1990 }, { "yearOfBirth": 1800 }, {"yearOfBirth": 1925}];
const outputSort1 = [{"yearOfBirth": 1800}, {"yearOfBirth": 1925}, {"yearOfBirth": 1990}];
const inputSort2 = [{"yearOfBirth": 1800}, {"yearOfBirth": 1800}, {"yearOfBirth": 1925}];
const outputSort2 = [{"yearOfBirth": 1925}, {"yearOfBirth": 1800}, {"yearOfBirth": 1800}];

describe('filtrarGenero', () => {
  it('debería ser una función', () => {
    expect(typeof potter.filtrarGenero).toBe('function');
  });

  it('Esta funcion deberia filtrar por genero', () => {
    expect(potter.filtrarGenero(inputGen, conditionGen)).toEqual(outputGen);
  });
});
describe('filtrarCasa', () => {
  it('debería ser una función', () => {
    expect(typeof potter.filtrarCasa).toBe('function');
  });

  it('Esta funcion deberia filtrar por casa', () => {
    expect(potter.filtrarCasa(inputHom, conditionHom)).toEqual(outputHom);
  });
});
describe('filtrarRolStudent', () => {
  it('debería ser una función', () => {
    expect(typeof potter.filtrarRolStudent).toBe('function');
  });

  it('Esta funcion deberia filtrar por estudiantes', () => {
    expect(potter.filtrarRolStudent(inputStud, conditionStud)).toEqual(outputStud);
  });
});
describe('filtrarRolStaff', () => {
  it('debería ser una función', () => {
    expect(typeof potter.filtrarRolStaff).toBe('function');
  });

  it('Esta funcion deberia filtrar por staff', () => {
    expect(potter.filtrarRolStaff(inputStaf, conditionStaf)).toEqual(outputStaf);
  });
});
describe('Descendente', () => {
  it('debería ser una función', () => {
    expect(typeof potter.Descendente).toBe('function');
  });

  it('debería retornar un array ordenado ', () => {
    expect(potter.Descendente(inputSort1)).toEqual(outputSort1);
  });
  it('debería retornar el mismo array ', () => {
    expect(potter.Descendente(inputSort1)).toEqual(outputSort1);
  });
});
describe('Ascendente', () => {
  it('debería ser una función', () => {
    expect(typeof potter.Ascendente).toBe('function');
  });
  it('debería retornar un array ordenado ', () => {
    expect(potter.Ascendente(inputSort2)).toEqual(outputSort2);
  });
  it('debería retornar el mismo array ', () => {
    expect(potter.Ascendente(inputSort2)).toEqual(outputSort2);
  });
});