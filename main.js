const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const maxPaletteBoxes = 15;

const generatecolor = () => {
 container.innerHTML = "";
 for (var i = 0; i < maxPaletteBoxes; i++) {
  let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  randomHex = `#${randomHex.padStart(6, "0")}`;

  const colour = document.createElement("li");
  colour.classList.add("main-box");
  colour.innerHTML = `<div class="box" style="background: ${randomHex}"></div>
                      <span class = "colour">${randomHex}</span>`;
  colour.addEventListener("click", () => copyColor(colour, randomHex));
  container.appendChild(colour);
 }
}
generatecolor();

const copyColor = (elem, hexVal) => {
 const colorElement = elem.querySelector(".colour");
 navigator.clipboard.writeText(hexVal).then(()=>{
  colorElement.innerText = "Copied";
  setTimeout(()=> colorElement.innerText = hexVal, 1000);
 }).catch(()=> alert("Failed to Copy The Colour Code!"));
}
btn.addEventListener("click", generatecolor);