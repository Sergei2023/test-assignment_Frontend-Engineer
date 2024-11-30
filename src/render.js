export default (state) => {
  const resultedNames = document.getElementById('resultedNames');
  resultedNames.innerHTML = '';

  const divNamesQuantity = document.createElement('div');
  divNamesQuantity.textContent = `подходящих юзеров: ${state.currentUsers.length}`;
  divNamesQuantity.classList.add('divNamesQuantity');
  // console.log(divNamesQuantity.textContent);
  // console.log(divNamesQuantity);
  resultedNames.append(divNamesQuantity);

  // const divName = document.createElement('div');
  // // divName.textContent = 1;
  // //   divName.textContent = word;
  // divResultWords.append(divName);

  const input = document.querySelector('.input');
  input.style.width = `${state.input.length + 2}ch`;
  input.value = state.input;
  // console.log(state.inpsut);
  // input.focus();

  state.currentUsers.forEach((name) => {
    const divName = document.createElement('div');
    divName.textContent = name;
    // divName.style.display = 'inline-block';
    divName.classList.add('divName');
    resultedNames.append(divName);
  });
};
