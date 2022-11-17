var card = document.querySelector('.card');
let front = document.querySelector('.card__face--front')
front.addEventListener('click', function () {
  card.classList.toggle('is-flipped');
});

function flipcard() {
  card.classList.toggle('is-flipped');
}

function Alltask() {
  const element = document.getElementById("lis");
  element.innerHTML="";
  for (let i = 0; i < localStorage.length; i++) {
    // let a = localStorage.key(i);
    const list = document.createElement("li");
    // const node = document.createTextNode(a);
    const node = document.createTextNode(localStorage.key(i));
    list.appendChild(node);
    const element = document.getElementById("lis");
    element.appendChild(list);

  }
}

function Addtask() {
  let head = document.getElementById("heading");
  let desc = document.getElementById("description");
  // console.log(head + " " + desc);

  localStorage.setItem(head.value, desc.value);

  console.log(head.value);
  console.log(desc.value)
  head.value = "";
  desc.value = "";
  Alltask();
}

Alltask();