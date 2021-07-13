/* */
const box4 = document.querySelector(".box-4")
console.log(box4)

const isInViewPort = el => {
    const rect = el.getBoundingClientRect();
    return rect;
}

const rect = isInViewPort(box4);