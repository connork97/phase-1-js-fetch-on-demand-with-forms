const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userInput = document.querySelector("input#searchByID");
    console.log(userInput.value);

    fetch(`http://localhost:3000/movies/${userInput.value}`)
    .then(resp => resp.json())
    .then(data => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        title.innerText = data.title;
        summary.innerText = data.summary;
    })
    .catch(err => console.log(err))
  })
}

document.addEventListener('DOMContentLoaded', init);