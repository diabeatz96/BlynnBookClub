const col = document.querySelector(".col-2")
const h1 = document.createElement("h1");
h1.innerText = "Aladdin"

col.addEventListener("click", () => {
    col.appendChild(h1);
})