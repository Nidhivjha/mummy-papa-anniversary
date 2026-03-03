// Anniversary Website Script ❤️
document.addEventListener("DOMContentLoaded", function () {
    if(!loveButton) return;
    /* AUTO HEART GENERATOR */
const heartsContainer = document.querySelector(".hearts-container");

for(let i=0;i<6;i++){
  let heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random()*90 + "%";
  heart.style.top = Math.random()*80 + "px";

  heart.style.animationDelay = (Math.random()*2)+"s";

  heartsContainer.appendChild(heart);
}
    const bgMusic = document.getElementById("bgMusic");
    const musicToggle = document.getElementById("musicToggle");
    const loveButton = document.getElementById("loveButton");
    const loveNote = document.getElementById("loveNote");
    const imageElement = document.getElementById("slideshowImage");
    document.querySelector(".slideshow-container").style.display = "flex";


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
   PERFECT ONE-TIME SLIDESHOW
==============================*/
  loveButton.addEventListener("click", async () => {

    loveNote.classList.toggle("visible");

    try{
        await bgMusic.play();
        isPlaying = true;
        musicToggle.textContent="🔊";
    }catch(e){}

    // Remove old roses if already present
    const old = document.querySelector(".rose-container");
    if(old) old.remove();

    // Create new rose container
    const roseContainer = document.createElement("div");
    roseContainer.classList.add("rose-container");
    document.body.appendChild(roseContainer);

    // Generate roses
    for(let i=0;i<40;i++){

        let rose = document.createElement("div");
        rose.classList.add("rose");
        rose.innerHTML="🌹";

        rose.style.left = Math.random()*100 + "%";
        rose.style.animationDuration = (5 + Math.random()*5) + "s";
        rose.style.fontSize = (20 + Math.random()*20) + "px";
        rose.style.animationDelay = Math.random()*5 + "s";

        roseContainer.appendChild(rose);
    }

}); 

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
