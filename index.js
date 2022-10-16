// import { apiurl } from './src/constants';

document.title = 'prework';

const characters = document.querySelector('section');

const getCharacters = async () => {
  const options = {
  method: 'GET',
  }
};
const API = "https://rickandmortyapi.com/api"
try {
  const response = await fetch (API);

  const data = await response.json();
  console.log(data)
}
catch (err) {
  console.error("Something went wrong!", err);
}

getCharacters()

const search = document.querySelector('search')

const input = document.querySelector('input')

const span = document.querySelector('span')
span.textContent = '42'

const text = document.createTextNode('+ results[index].name');

const allBtn = document.querySelector('#all')
const aliveBtn = document.querySelector('#alive')
const deadBtn = document.querySelector('#dead')


characters.addEventListener('change', () => {
    fetch(API + '?page=' + this.value)
      .then(function (res) {
        return result.json();
      })
      .then((res) => {
        console.log(res);
        results = '';
      });
  });

  function getOnlyAlives() {
    characters.innerHTML = '';

    results.forEach((res, index) => {
      if (res.status === 'Alive') {
        results.splice(index, 1);
      }
    });

    //todo render filtered results!
  }

  function deadsOnly() {
    characters.innerHTML = '';

    results.forEach((res, index) => {
      if (res.status === 'Dead') {
        results.splice(index, 1);
      }
    });

    //todo render filtered results!
  }

  function all() {
    // todo
  }

  aliveBtn.addEventListener('click', getOnlyAlives);
  deadBtn.addEventListener('click', deadsOnly);
  allBtn.addEventListener('click', all);

    characters.append(search);
    const result = ''

      const n = document.createElement('div');
      const gender = document.createElement('div');
      const status = document.createElement('div');
      const jpg = document.createElement('img');
      jpg.width = '100';
      
      fetch("https://rickandmortyapi.com/api/character")
      .then((data) => {
        return data.json();
      })
                               
      .then((objectData) => {
          let listData = '';
          objectData.map((values) => {
            listData += `<main>
            <section>${values.name}</section>
            <section>${values.gender}</section>
            <section>${values.status}</section>
            <section>${values.image}</section>
            </main>`;
          });
          document.getElementById('main').innerHTML = listData;
      });

            
      const details = document.querySelector('section:not(:first-child)');

      details.append(n, gender, status, jpg);

      jpg.onclick = () => {
        const dialog = document.createElement('dialog');
        document.body.append(dialog);

        dialog.append(jpg);
        jpg.width = 300;

        dialog.showModal();

        const close = document.createElement('button');

        close.innerText = 'zamknij';

        close.addEventListener('click', () => {
          dialog.close();
        });

        dialog.append(close);
      };  
    
