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

        // Remove old roses
        const existing = document.querySelector(".rose-container");
        if (existing) existing.remove();

        const roseContainer = document.createElement("div");
        roseContainer.classList.add("rose-container");
        document.body.appendChild(roseContainer);

        for (let i = 0; i < 40; i++) {

            let rose = document.createElement("div");
            rose.classList.add("rose");
            rose.innerHTML = "🌹";

            rose.style.left = Math.random() * 100 + "%";
            rose.style.fontSize = (20 + Math.random() * 20) + "px";
            rose.style.animationDuration = (6 + Math.random() * 6) + "s";
            rose.style.animationDelay = Math.random() * 5 + "s";

            roseContainer.appendChild(rose);
        }

    });

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

});
