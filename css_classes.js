const addClass = () => {
  let elem = document.querySelector("strong");
  elem.classList.add("word");
};

const remClass = () => {
  for (let elem of document.querySelectorAll(".word")) {
    elem.classList.remove("word");
  }
};

const main = () => {
  document.querySelector("#addClass").addEventListener("click", addClass);
  document.querySelector("#remClass").addEventListener("click", remClass);
};
main();
