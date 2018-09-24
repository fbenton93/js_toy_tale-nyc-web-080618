
let toyId = 8;
let toyStore = {}
class Toy {
  constructor(toyObj) {
    this.id = toyObj.id
    this.name = toyObj.name
    this.image = toyObj.image
    this.likes = toyObj.likes
    toyStore[this.id] = this
  }
  render() {
    return `<div class="toy"><h2>${this.name}</h2>
    <img src="${this.image}" class="toy-avatar"></img>
    <p>${this.likes} Likes</p>
    <button id=${this.id} class="like-btn">Like <3</button></div>
    `
  }
  addLike() {
  }
}
