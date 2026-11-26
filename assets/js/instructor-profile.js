let showeDetabookTeacher1 = () => {
    let xml = new XMLHttpRequest()
    xml.open("get", "http://localhost:3000/booksTeacher1")
    xml.responseType = "json"
    xml.onload = () => {
xml.response.forEach((elem)=>{
    document.querySelector(".books-techer1").innerHTML+=`
    

     <div class="w-full bg-green-400  py-4 sm:w-1/2 sm:px-3 sm:py-5 xl:w-1/3 xl:px-[25px] xl:py-[30px]">
            <div class="card card-book flex flex-col gap-3 rounded-xl bg-white p-3 shadow-md md:gap-5">
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