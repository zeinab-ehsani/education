const welcomeSwiper = new Swiper('.welcome-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 3 },

  },
  navigation: {
    nextEl: '.welcome-next',
    prevEl: '.welcome-prev',
  },

});
// end swiper welcome

let showeDetaswiperwelcom = () => {
  let xml = new XMLHttpRequest()
  xml.open("get", "http://localhost:3000/welcomeCourses")
  xml.responseType = "json"
  xml.onload = () => {


    xml.response.forEach((elem) => {
      document.querySelector("div.swiper-wrapper").innerHTML += `
                    

           <div class="swiper-slide h-auto">
           <a href="./course-full-view.html">
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
      </a>

</div>

    
    
    
    
    `
    });
  }

  xml.onerror = () => {
    console.log("hey ")
  }
  xml.send(null)
}
showeDetaswiperwelcom()

// end swiper welcome


// start section category

let showeDetaCategory = () => {
  let xml = new XMLHttpRequest()
  xml.open("get", "http://localhost:3000/categories")
  xml.responseType = "json"
  xml.onload = () => {
    xml.response.forEach((elem) => {
      document.querySelector("div.category").innerHTML += `
  
<a href="./search.html" class="card-category w-full sm:w-[calc((100%_-_var(--gap))/2)] lg:w-[calc((100%_-_3*var(--gap))/4)]
            bg-white rounded-[20px] flex flex-col justify-center items-center gap-2 md:gap-3 p-4 md:p-6 2xl:p-[30px] shadow text-center">

  <div class="flex items-center justify-center rounded-[4px] w-14 h-14 md:w-[70px] md:h-[70px] xl:w-20 xl:h-20 2xl:w-[90px] 2xl:h-[90px]"
       style="background-color:${elem.color}">
    <img class="w-6 h-6 md:w-8 md:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10" src="${elem.img}" alt="${elem.name}">
  </div>

  <h3 class="text-lg md:text-xl xl:text-2xl 2xl:text-[30px] font-semibold text-[#010514]">${elem.name}</h3>
  <p class="text-xs md:text-sm xl:text-base 2xl:text-[18px] text-[#696984]">${elem.description}</p>
</a>  
  `
    })
  }
  xml.onerror = () => {
    console.log("error")
  }
  xml.send(null)
}

showeDetaCategory()
// end section category