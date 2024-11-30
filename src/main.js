import objUserInfo from './users.js';
import arrRightSymbols from './objLetters.js';
import render from './render.js';
import checkNames from './checkNames.js';

window.addEventListener('load', () => {
  const arrUserNames = [];
  for (const entry of objUserInfo) {
    arrUserNames.push(entry.name);
  }
  // console.log(arrUserNames);

  console.log('page is fully loaded');
  const input = document.querySelector('.input');
  // console.log(input);
  input.focus();

  const state = {
    input: '',
    currentUsers: arrUserNames,
  };

  render(state);
  
  input.addEventListener('keydown', (e) => {
    e.preventDefault();

    if (arrRightSymbols.indexOf(e.key) !== -1 ) {
      state.input += e.key;
    } else if (e.key === 'Backspace') {
      state.input = state.input.slice(0, -1);
    } else if (e.key === 'Delete') {
      state.input = '';
    }

    checkNames(state, arrUserNames);
    render(state);
  
    // const arrWords = check(state.arrRightPlace, state.arrWrongPlace, state.strNoPlace);
  
    // input.addEventListener('input', () => {
    //   render(state, arrWords);
    // });
  });
});
