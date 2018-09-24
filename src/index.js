const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

const collection = document.querySelector("#toy-collection")
fetch("http://localhost:3000/toys/")
.then((response) => response.json())
.then((response2) => response2.map( (toy) => {
  const newToy = new Toy(toy)
  collection.innerHTML += newToy.render()
}))






addBtn.addEventListener('click', () => {
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    toyForm.addEventListener("submit", function(e){
      e.preventDefault();
      const imgInput = document.querySelector("#image-input").value
      const nameInput = document.querySelector("#name-input").value
      fetch("http://localhost:3000/toys/", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nameInput,
          image: imgInput,
          likes: 0
        })

      }).then(response => response.json()).then(data => {
        const newToy = new Toy(data)
        collection.innerHTML += newToy.render()
      })
    })
  } else {
    toyForm.style.display = 'none'
  }
})

const goodParent = document.getElementById("toy-collection")
goodParent.addEventListener('click', function(e) {

  const toyLikes = (toyStore[e.target.id].likes += 1)
  fetch(`http://localhost:3000/toys/${e.target.id}`, {
    method: "PATCH",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      likes: toyLikes
    })
  })

  e.target.parentNode.childNodes[4].innerHTML = `${toyLikes} Likes`
})


// OR HERE!
