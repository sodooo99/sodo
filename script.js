let hero = document.querySelector(".hero");

let bg = document.querySelector(".bg");


let page = window.location.pathname.split("/").pop();

let images = [];

if(page === "index.html"){
    images = [
        "images/nature.jpg",
        "images/nature2.avif",
        "images/nature3.jpg",
        "images/nature4.png"
    ];
}
else if(page === "japanese.html"){
    images = [
        "images/nature.jpg",
        "images/nature2.avif",
        "images/nature3.jpg",
        "images/nature4.png"
    ];
}
else if(page === "Korea.html"){
    images = [
        "images/nature.jpg",
        "images/nature2.avif",
        "images/nature3.jpg",
        "images/nature4.png"
    ];
}
else if(page === "Singapore.html"){
    images = [
        "images/singapore1.jpg",
        "images/singapore2.jpg",
        "images/singapore3.jpg"
    ];
}
else if(page === "China.html"){
    images = [
        "images/china1.jpg",
        "images/china2.jpg",
        "images/china3.jpg"
    ];
}
else if(page === "America.html"){
    images = [
        "images/america1.jpg",
        "images/america2.jpg",
        "images/america3.jpg"
    ];
}
else{
    // default if page not recognized
    images = [
        "images/nature1.jpg",
        "images/nature2.jpg"
    ];
}

let i = 0;

function changeBg(){
    if(hero && images.length > 0){
        hero.style.backgroundImage = `url(${images[i]})`;
        i = (i + 1) % images.length;
    }
}

// Initial load
changeBg();

// Change every 4 seconds
setInterval(changeBg, 4000);
