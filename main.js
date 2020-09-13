let toSarcasmFont = function () {
  return (document.getElementById("sarcasticOutput").innerHTML =
    document
      .getElementById("normalFont")
      .value.split("")
      .map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase()))
      .join("") + " /s");
};
