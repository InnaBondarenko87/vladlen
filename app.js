// const array = [1, 2, 3, 5, 20, 42];
// //console.log(array[1]); индекс
// // длина масива
// // console.log(array[array.length - 1]); // 6-1
// array[0] = "Привет!";
// console.log(array);

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

// console.log(inputElement.value);

const notes = ["записать блок про массивы", "рассказать теорию"];

function render() {
  //   for (let i = 0; i < notes.length; i++) {
  //     listElement.insertAdjacentHTML("beforeend", getNotTemplate(notes[i]));
  //   }
  for (let note of notes) {
    listElement.insertAdjacentHTML("beforeend", getNotTemplate(note));
  }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  //   listElement.innerHTML =
  listElement.insertAdjacentHTML(
    "beforeend",
    getNotTemplate(inputElement.value)
  );
  inputElement.value = "";
};

function getNotTemplate(title) {
  return `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${title}</span>
          <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
          </span>
        </li>`;
}
