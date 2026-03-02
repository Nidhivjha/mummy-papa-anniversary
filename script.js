// Anniversary Website Script ❤️
document.addEventListener("DOMContentLoaded", function () {

    const bgMusic = document.getElementById("bgMusic");
    const musicToggle = document.getElementById("musicToggle");
    const loveButton = document.getElementById("loveButton");
    const loveNote = document.getElementById("loveNote");
    const imageElement = document.getElementById("slideshowImage");

    let isPlaying = false;
    let slideshowInterval = null;
    let images = [];
    let currentIndex = 0;

    /* =============================
       APPLY CONFIG DATA
    ==============================*/
    if (window.CONFIG) {

        document.getElementById("subtitle").textContent =
            CONFIG.messages.subtitle;

        document.getElementById("partnerName").textContent =
            CONFIG.partnerName;

        document.getElementById("yourName").textContent =
            CONFIG.yourName;

        document.getElementById("loveNoteText").textContent =
            CONFIG.messages.loveNote;

        document.getElementById("memoryLateNight").textContent =
            CONFIG.memories.lateNight;

        document.getElementById("memoryFirstMeeting").textContent =
            CONFIG.memories.firstMeeting;

        document.getElementById("memoryCare").textContent =
            CONFIG.memories.care;

        document.getElementById("specialMessage1").textContent =
            CONFIG.messages.specialMessage;

        document.getElementById("specialMessage2").textContent =
            CONFIG.messages.specialMessage2;

        document.getElementById("signature").textContent =
            CONFIG.messages.signature;
    }

    /* =============================
       MUSIC CONTROL
    ==============================*/
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

    /* =============================
       SURPRISE BUTTON
    ==============================*/
    loveButton.addEventListener("click", () => {

        loveNote.classList.toggle("visible");

        if (!isPlaying) {
            bgMusic.play();
            musicToggle.textContent = "🔊";
            isPlaying = true;
        }
    });
/* =============================
   PERFECT ONE-TIME SLIDESHOW
==============================*/

window.showGallery = function(type){

    clearInterval(slideshowInterval);

    images = [];
    currentIndex = 0;

    imageElement.src = "";

    // preload images
    for (let i = 1; i <= 50; i++) {

        let path =
        `assets/photos/${type}/${type} (${i}).jpeg`;

        let img = new Image();

        img.onload = function () {

            images.push(path);

            // show first image
            if (images.length === 1) {
                imageElement.src = path;
            }
        };

        img.src = path;
    }

    slideshowInterval = setInterval(() => {

        if (images.length === 0) return;

        currentIndex++;

        // ✅ STOP after last image
        if (currentIndex >= images.length) {

            clearInterval(slideshowInterval);

            setTimeout(()=>{
                imageElement.src = "";
            },1000);

            return;
        }

        imageElement.src =
            images[currentIndex];

    }, 2000); // 2 sec per photo


    document.getElementById("gallerySection")
        .scrollIntoView({
            behavior:"smooth",
            block:"start"
        });
};
});