let showeDetabookTeacher1 = () => {
    let xml = new XMLHttpRequest()
    xml.open("get", "http://localhost:3000/booksTeacher1")
    xml.responseType = "json"
    xml.onload = () => {
xml.response.slice(0,6).forEach((elem)=>{
    document.querySelector(".books-techer1").innerHTML+=`
     <div class="w-full  w-full sm:w-[48%] xl:w-[30%]  xl:py-[30px]">
            <div class="card card-book flex flex-col gap-3 rounded-xl bg-white p-3 shadow-[0_0_10px_rgba(0,0,0,0.15)] md:gap-5 xl:p-5">
                <img src=${elem.image} alt="Build Your Dream Network"
                    class="aspect-[7/8] w-full rounded-lg object-cover">

                <div class="flex items-center justify-between">
                    <span class="text-sm md:text-base">${elem.title}</span>
                    <span class="text-lg font-bold text-[#4FC3C3] md:text-xl">${elem.price}$</span>
                </div>
            </div>
        </div>
    `








})
    }
    xml.onerror = () => {
        console.log("errore")
    }
    xml.send(null)
}
showeDetabookTeacher1()


let showeDetabookTeacher1Section2 = () => {
    let xml = new XMLHttpRequest()
    xml.open("get", "http://localhost:3000/booksTeacher1")
    xml.responseType = "json"
    xml.onload = () => {
xml.response.slice(6,12).forEach((elem)=>{
    document.querySelector(".books-techer1-section2").innerHTML+=`
     <div class="w-full  w-full sm:w-[48%] xl:w-[30%]  xl:py-[30px]">
            <div class="card card-book flex flex-col gap-3 rounded-xl bg-white p-3 shadow-[0_0_10px_rgba(0,0,0,0.15)] md:gap-5 xl:p-5">
                <img src=${elem.image} alt="Build Your Dream Network"
                    class="aspect-[7/8] w-full rounded-lg object-cover">

                <div class="flex items-center justify-between">
                    <span class="text-sm md:text-base">${elem.title}</span>
                    <span class="text-lg font-bold text-[#4FC3C3] md:text-xl">${elem.price}$</span>
                </div>
            </div>
        </div>
    `








})
    }
    xml.onerror = () => {
        console.log("errore")
    }
    xml.send(null)
}
showeDetabookTeacher1Section2()





let btnBook1teacher1=document.querySelector(".btn-techer1-book1")
let btnBook1teacher2=document.querySelector(".btn-techer1-book2")

let book1Teacher1=document.querySelector(".books-techer1")
let bookTeacher1Section2=document.querySelector(".books-techer1-section2")

btnBook1teacher1.addEventListener("click",function(){

    book1Teacher1.classList.add("hidden")
    bookTeacher1Section2.classList.remove("hidden")
})

btnBook1teacher2.addEventListener("click",function(){

    book1Teacher1.classList.remove("hidden")
    bookTeacher1Section2.classList.add("hidden")
})