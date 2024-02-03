document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".char-button").forEach(function (button) {
    button.addEventListener("click", function () {
      document.getElementById("ligacy").value += this.getAttribute("data-char");
    });
  });

  document.getElementById("copy").addEventListener("click", function () {
    navigator.clipboard
      .writeText(document.getElementById("ligacy").value)
      .then(() => alert("Text copied to clipboard!"))
      .catch((err) => console.error("Error copying text: ", err));
  });

  document.getElementById("backspace").addEventListener("click", function () {
    let textarea = document.getElementById("ligacy");
    textarea.value = textarea.value.slice(0, -1);
  });
});
