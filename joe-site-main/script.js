let slides = document.querySelectorAll("img");
let iframes = document.querySelectorAll("iframe")

// if (w > 768) {

// }

slides.forEach(img => {

    var w = img.clientWidth;
    if((img.getAttribute('class').includes('w-100')) && (w > 700)) {
        img.classList.remove('w-100');
        img.classList.add('w-50');
    }

    console.log(w);
});

// console.log(slides)