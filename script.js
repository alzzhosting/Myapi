document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

function tryApi(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => alert(JSON.stringify(data, null, 2)))
        .catch(err => alert("Gagal mengambil data API"));
}

document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        navigator.clipboard.writeText(this.dataset.url);
        alert("URL disalin!");
    });
});

function apiytdl(){
  window.location.href=""
}
function apittdl(){
  window.location.href=""
}
function apiai(){
  window.location.href=""
}
function apiytmp3(){
  window.location.href=""
}
function apispo(){
  window.location.href=""
}
function apiigdl(){
  window.location.href=""
}
function apisvideo(){
  window.location.href=""
}
function apidepsek(){
  window.location.href=""
}