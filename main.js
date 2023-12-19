let links = document.getElementById("link")
let ul = document.getElementById("ul")

links.addEventListener("click", function() {
    ul.style.display = (ul.style.display === "none" || ul.style.display === "") ? "block" : "none";
});