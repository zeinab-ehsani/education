const welcomeSwiper = new Swiper('.welcome-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    640: { slidesPerView: 3},
    1024: { slidesPerView: 3 },

  },
  navigation: {
    nextEl: '.welcome-swiper .swiper-button-next',
    prevEl: '.welcome-swiper .swiper-button-prev',
  },
});
// end swiper welcome

let showeDetaswiperwelcom=()=>{
let xml=new XMLHttpRequest()
xml.open("get","http://localhost:3000/welcomeCourses")
xml.responseType="json"
xml.onload=()=>{


  xml.response.forEach((elem)=> {
    document.querySelector("div.swiper-wrapper").innerHTML+=`
           <div class="swiper-slide h-auto">
  <div class="h-full flex flex-col gap-2 md:gap-3 bg-white rounded-[20px] p-3 md:p-4 2xl:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">

    <img class="w-full rounded-xl aspect-[3/2] object-cover"
         src=${elem.image} alt="">

    <h3 class="text-sm md:text-base 2xl:text-xl font-medium text-[#252641]">
     ${elem.title}
    </h3>

    <div class="flex items-center gap-2">
      <img class="w-6 h-6 md:w-8 md:h-8 2xl:w-[42px] 2xl:h-[42px] rounded-full"
           src="./assets/img/Course/linaprofile.svg" alt="">
      <span class="text-xs md:text-sm 2xl:text-base text-[#252641]">Lina</span>
    </div>

     <div class="w-full">
    <progress class="progress progress-accent w-56" value="${elem.completed}" max="${elem.total}"></progress>

    <p class="text-[10px] md:text-xs text-right text-[#696984]">Lesson  ${elem.total} of  ${elem.completed}</p>

    </div>
  </div>
</div>

    
    
    
    
    
    `
  });
}

xml.onerror=()=>{
  console.log("hey ")
}
xml.send(null)
}
showeDetaswiperwelcom()

