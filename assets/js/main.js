// let light=document.querySelector("#light")
// let dark=document.querySelector("#dark")
// let cupcake=document.querySelector("#cupcake")

// dark.addEventListener("click",function(){


// })
// let body = document.querySelector("body")

// dark.addEventListener("click", function () {
//     body.classList.remove("text-white")
//     body.classList.add("text-black")
// })
// let items = document.querySelectorAll(".bg-white,.text-white")

// function setTheme(bg, text) {
//     items.forEach(function (item) {
//         item.classList.remove(
//             "bg-white", "bg-[#2b2b2b]", "bg-[#faf7f5]",
//             "text-black", "text-white",
//         )
//         item.classList.add(bg, text)
//     })
// }

// light.addEventListener("click", function () {
//     setTheme("bg-white", "text-black")
// })

// dark.addEventListener("click", function () {
//     setTheme("bg-[#2b2b2b]", "text-white")
// })

// cupcake.addEventListener("click", function () {
//     setTheme("bg-[#faf7f5]", "text-black")
// })








let bgItems = document.querySelectorAll(".bg-white")
let textItems = document.querySelectorAll(".text-white")

function setTheme(bg, text) {
    bgItems.forEach(function (item) {
        item.classList.remove("bg-white", "bg-[#2b2b2b]", "bg-[#faf7f5]")
        item.classList.add(bg)
    })

    textItems.forEach(function (item) {
        item.classList.remove("text-white", "text-black")
        item.classList.add(text)
    })
}

light.addEventListener("click", function () {
    setTheme("bg-white", "text-white")
})

dark.addEventListener("click", function () {
    setTheme("bg-[#2b2b2b]", "text-dark")
})

cupcake.addEventListener("click", function () {
    setTheme("bg-[#faf7f5]", "text-black")
})