// Anniversary Website Script ❤️
document.addEventListener("DOMContentLoaded", function () {

    const bgMusic = document.getElementById("bgMusic");
    const musicToggle = document.getElementById("musicToggle");
    const loveButton = document.getElementById("loveButton");
    const loveNote = document.getElementById("loveNote");
    const imageElement = document.getElementById("slideshowImage");
    const slideshowContainer = document.querySelector(".slideshow-container");

    let isPlaying = false;
    let slideshowInterval = null;
    let images = [];
    let currentIndex = 0;

    /* ================= MUSIC CONTROL ================= */

    musicToggle.addEventListener("click", () => {
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.textContent = "🎵";
        } else {
            bgMusic.play();
            musicToggle.textContent = "🔊";
        }
        isPlaying = !isPlaying;
    });

    /* ================= SURPRISE BUTTON ================= */

    loveButton.addEventListener("click", async () => {

        loveNote.classList.toggle("visible");

        try {
            await bgMusic.play();
            isPlaying = true;
            musicToggle.textContent = "🔊";
        } catch (e) {}

        
      // Remove old petals
const existing = document.querySelector(".petal-container");
if(existing) existing.remove();

const petalContainer = document.createElement("div");
petalContainer.classList.add("petal-container");
document.body.appendChild(petalContainer);

for(let i=0;i<35;i++){

    let petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerHTML = "🌸";   // soft pink petal

    petal.style.left = Math.random()*100 + "%";
    petal.style.fontSize = (15 + Math.random()*20) + "px";
    petal.style.animationDuration = (6 + Math.random()*6) + "s";
    petal.style.animationDelay = Math.random()*5 + "s";

    petalContainer.appendChild(petal);
}  );
    /* ================= GALLERY FUNCTION ================= */
loveButton.addEventListener("click", async () => {
   ...
});  // ← CLOSE BUTTON HERE

/* ================= GALLERY FUNCTION ================= */

window.showGallery = function (type) {

    clearInterval(slideshowInterval);

    slideshowContainer.style.display = "flex";

    images = [];
    currentIndex = 0;
    imageElement.src = "";

    for (let i = 1; i <= 30; i++) {

        let path = `assets/photos/${type}/${type} (${i}).jpeg`;

        let img = new Image();

        img.onload = function () {

            images.push(path);

            if (images.length === 1) {
                imageElement.src = path;
            }
        };

        img.src = path;
    }

    slideshowInterval = setInterval(() => {

        if (images.length === 0) return;

        currentIndex++;

        if (currentIndex >= images.length) {
            clearInterval(slideshowInterval);
            setTimeout(() => {
                imageElement.src = "";
            }, 1000);
            return;
        }

        imageElement.src = images[currentIndex];

    }, 2000);

    document.getElementById("gallerySection")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
};
   
