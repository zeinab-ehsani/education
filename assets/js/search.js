// start search js
let allProducts =[]


let fetchData =async()=>{
    try {
        let res=await fetch("http://localhost:3000/allProducts")
        let data=await res.json()
        allProducts=data
        render(allProducts)
    } 
    
catch (err) {
    console.error(err)
}}
function render(products){
    let container=document.querySelector(".cards-search")
    container.innerHTML=""

    products.forEach((elem) => {
        container.innerHTML+=`
          <a href="./course-detail.html?id=${elem.id}"
   class="flex-none w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.34px)] xl:w-[calc(25%-15px)]">
    <div class="h-full bg-white rounded-[20px] p-3 md:p-4 2xl:p-[18px] shadow-[0px_19px_47px_#2F327D1A] dark:shadow-none flex flex-col gap-2 md:gap-3">

      <img class="w-full rounded-[15px] aspect-[4/3] object-cover" src="${elem.img}" alt="${elem.title}">

      <div class="flex items-center justify-between text-[10px] md:text-xs 2xl:text-sm text-[#696984]">
        <span class="flex items-center gap-1">
          <svg class="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
          </svg>
          ${elem.category}
        </span>
        <span class="flex items-center gap-1">
          <svg class="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
          </svg>
          ${elem.duration}
        </span>
      </div>

      <h3 class="text-base md:text-lg 2xl:text-xl font-medium text-[#252641]">${elem.title}</h3>
      <p class="text-xs md:text-sm 2xl:text-base text-[#696984] line-clamp-3">${elem.description}</p>

      <div class="mt-auto flex items-center justify-between">
        <span class="flex items-center gap-2">
          <img class="w-6 h-6 md:w-7 md:h-7 2xl:w-9 2xl:h-9 rounded-full" src="${elem.teacherImage}" alt="${elem.teacher}">
          <span class="text-xs md:text-sm 2xl:text-base text-[#252641]">${elem.teacher}</span>
        </span>
        <span class="flex items-baseline gap-2">
          <s class="text-[10px] md:text-xs 2xl:text-sm text-[#696984] ">$${elem.oldPrice}</s>
          <b class="text-sm md:text-base 2xl:text-xl text-[#49BBBD]">$${elem.price}</b>
        </span>
      </div>
    </div>
  </a>`
  

        
        
        
    });
}
let input =document.querySelector(".input-search")
input.addEventListener("input",(e)=>{
let harchi=e.target.value.toLowerCase().trim()

let filteredProducts=allProducts.filter(product=>

product.title.toLowerCase().includes(harchi)
)
render(filteredProducts)

})
fetchData()