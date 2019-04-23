/* Manejo del DOM */
selectElement.addEventListener('change', (event) => {
    const result = document.querySelector('.result');
    result.textContent = `You like ${event.target.value}`;


    selectGenero.addEventListener('change', (event) => {
        resetSelect(selectNamesElement);
        const result = Pokemon.filtrarGenero(, 'type', element.target.value);
        pintarNombresPrimeraPG(pokemons, pokemonesPrimeraPG);
      });
