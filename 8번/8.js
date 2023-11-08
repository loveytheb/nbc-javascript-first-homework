const upbtn = document.querySelector(".upbtn");

window.addEventListener("scroll", () => {
    if (scrollY > 100) {
        upbtn.style.display = "block";
        upbtn.classList.add("show");
    } else {
        upbtn.style.display = "none";
        upbtn.classList.remove("show");
    }
})

upbtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});