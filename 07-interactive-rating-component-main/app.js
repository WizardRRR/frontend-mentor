const d = document

// elementos capturados de los pasos de formulario
const [cardThanks] = d.getElementsByClassName("card-thanks")
const [form] = d.getElementsByClassName("container")

// capturamos los spans con los scores en un array
const ratingContainer = document.querySelector(".container__rating")
const scoreSpans = [...ratingContainer.querySelectorAll("span")]

// añadiendo evento de click a cada span de score
scoreSpans.forEach((score) => {
  score.addEventListener('click', () => {
    form.style.display = "none"
    cardThanks.style.display = "flex"
    d.getElementById("selected-score").innerHTML = score.innerHTML
  })
})