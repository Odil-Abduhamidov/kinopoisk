// const print = console.log

// for(let elem of [1, 2, 3]) {
//     console.log(elem)
// }

// let arr = [10, 20, 30]

// for(let i = 0; i < arr.length; i++) {
//     print(arr[i])
// }

// [100, 200, 300].forEach((num) => {
//     print(num)
// })

// const studentName = 'Ayubkhan'

// const strikeElementString = `<s>${studentName}</s>`

// print(strikeElementString)

// document.body.insertAdjacentHTML('beforeend', strikeElementString)

// const marqueeElement = document.createElement('marquee')

// marqueeElement.textContent = studentName

// document.body.append(marqueeElement)

const API_KEY = "868b7975"

async function fetchData(title) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t="${title}"`)
    const data = await response.json()
    return data
}

const searchInputElement = document.querySelector('#movie-search-input')
const searchButtonElement= document.querySelector('#movie-search-button')

let movieTitleValue = ''

searchButtonElement.addEventListener('click', async () => {
    movieTitleValue = searchInputElement.value
    const movie = await fetchData(movieTitleValue)
    const cardElementTemplate = `
    <div class="card" style="width: 18rem">
        <img
        src="${movie.Poster}"
        class="card-img-top"
        alt="${movie.Title} movie poster"
        />
        <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text">${movie.Plot}</p>
            <a
                href="#"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                >
                Подробнее
            </a>
        </div>
    </div>`
    
    const searchResultsContainer = document.querySelector('.search-results')

    console.log(searchResultsContainer.children)
    
    searchResultsContainer.insertAdjacentHTML('beforeend', cardElementTemplate)
})

const modal = document.getElementById('exampleModal')

modal.addEventListener('show.bs.modal', event => {
  console.log("hello");
  document.getElementById('exampleModalLabel').textContent = movie.Title
  document.querySelector("#cardTitle").textContent= movie.Title
  document.getElementById('modal-body-image').src = movie.Poster

  document.getElementById('cardActors').textContent = movie.Actors
  document.getElementById('cardPlot').textContent = movie.Plot
  document.getElementById('cardYear').textContent = movie.Year
  document.getElementById('cardRating').textContent = movie.Rating
  document.getElementById('cardReleased').textContent = movie.Released
  document.getElementById('cardType').textContent = movie.Type

  // document.querySelector('.modal-body-card2').textContent = JSON.stringify(movie)

})



const modalBoxesElement = document.querySelector("#modal-boxes")




// const person = {
//     "a b": 1,
//     temp: 36.6,
//     a_b: 3
// }

// console.log(person["a b"])
// console.log(person.a_b)



