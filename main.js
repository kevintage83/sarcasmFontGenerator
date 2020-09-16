let toSarcasmFont = function () {
  return (document.getElementById("sarcasticOutput").innerHTML =
    document
      .getElementById("normalFont")
      .value.split("")
      .map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase()))
      .join("") + " /s");
};

let enterPressed = document.getElementById("normalFont");
enterPressed.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    //checks whether the pressed key is "Enter"
    toSarcasmFont();
    clearText();
    //event.preventDefault();
    //this should delete value from the input
    //event.currentTarget.value = "";
  }
});

let clearText = function () {
  document.getElementById("normalFont").value = "";
};

function convertAndClearInput() {
  toSarcasmFont();
  clearText();
}
