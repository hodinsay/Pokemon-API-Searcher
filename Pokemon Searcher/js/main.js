//Example fetch using pokemonapi.co
const card = document.querySelector('#card')
const message = document.querySelector('#message')
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  message.classList.add('hidden')
  card.classList.toggle('hidden')
  const choice = document.querySelector('input').value.toLowerCase()
  console.log(choice)
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.name
        document.querySelector('.sprites').src = data.sprites['front_default']
        document.querySelector('h3').innerText = data.types.map((type) => type.type.name).join(', ')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
