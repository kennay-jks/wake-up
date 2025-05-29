let btn = document.querySelector(".env-linha")
let nav = document.querySelector(".right-f")
let l1 = document.querySelector(".l1")
let l2 = document.querySelector(".l2")
let l3 = document.querySelector(".l3")


btn.addEventListener("click", () =>{

    if (nav.classList.contains("active")) {
        nav.classList.remove("active")
            l1.classList.remove("active")
            l2.classList.remove("active")
            l3.classList.remove("active")
        setTimeout(() => {
            nav.classList.remove("disp")
        }, 100)
    } else {
        nav.classList.add("disp")

        setTimeout(() => {
            nav.classList.add("active")
            l1.classList.add("active")
            l1.classList.add("active")
            l2.classList.add("active")
            l3.classList.add("active")
        }, 10)
    }

})

let viewBtn = document.querySelectorAll(".viewBtn")
let envBusca = document.querySelector(".env-busca-mobile")

viewBtn.forEach( (viewButton) => {
    viewButton.addEventListener("click", () => {
        envBusca.classList.toggle("view")
    })
})