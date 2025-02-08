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
  window.location.href="https://apirest.kenzcode.biz.id/api/download/ytdl?url="
}
function apittdl(){
  window.location.href="https://apirest.kenzcode.biz.id/api/download/ttdl?url="
}
function apiai(){
  window.location.href="https://apirest.kenzcode.biz.id/api/ai/lumin?q="
}
function apiytmp3(){
  window.location.href="https://apirest.kenzcode.biz.id/api/download/ytmp3?url="
}
function apispo(){
  window.location.href="https://apirest.kenzcode.biz.id/api/download/spo?url="
}
function apiigdl(){
  window.location.href="https://apirest.kenzcode.biz.id/api/download/igdl?url="
}
function apisvideo(){
  window.location.href="https://apirest.kenzcode.biz.id/api/download/svideo?url="
}
function apidepsek(){
  window.location.href="https://apirest.kenzcode.biz.id/api/ai/depsek?q="
}
