 document.getElementById('footer-placeholder').innerHTML = `




  <!-- start footer -->

  <footer
    class="mt-12 md:mt-20 xl:mt-24 2xl:mt-28.75 w-full text-center bg-[#252641] pt-10 md:pt-14 2xl:pt-18.5 pb-6 md:pb-8 2xl:pb-10">
    <div
      class="flex flex-col justify-center text-center w-11/12 md:w-3/4 xl:w-1/2 mx-auto gap-10 md:gap-16 xl:gap-20 2xl:gap-24">

      <div class="flex flex-row justify-center items-center gap-6 md:gap-10 xl:gap-14 2xl:gap-20">
        <img class="w-20 md:w-24 2xl:w-28.5" src="./assets/img/img-home/logo-footer.svg" alt="">
        <span
          class="text-sm md:text-base xl:text-xl 2xl:text-[22px] text-white font-bold ps-5 md:ps-7 2xl:ps-10 border-s-2 tracking-wider">Virtual
          Class
          <br>
          for Zoom</span>
      </div>

      <div class="flex flex-col gap-3 md:gap-4 2xl:gap-5">
        <p class="text-base md:text-lg xl:text-xl 2xl:text-[26px] font-medium text-center text-[#B2B3CF]">Subscribe to
          get our Newsletter</p>
        <form class="flex email-div flex-col min-[590px]:flex-row items-center gap-3 md:gap-4 justify-center">
          <input type="email" placeholder="Your Email" class="input input-sub input-bordered border-2 w-full max-w-xs min-[590px]:w-auto h-11 md:h-12 xl:h-14 2xl:h-15
             border-[#696984] text-[#696984] text-sm md:text-base xl:text-lg 2xl:text-xl ps-5 2xl:ps-7 py-3.5
              rounded-full bg-transparent focus:border-[#49BBBD]" required>
          <button
            class="btn btn-sub h-11 md:h-12 xl:h-14 2xl:h-15 rounded-full text-sm md:text-base xl:text-xl 2xl:text-[22px] font-medium bg-[#49BBBD] hover:bg-[#7ECCCE] text-white border-none shadow-none">
            <span class="loading loading-dots loading-xl hidden"></span>

            <span class="text-sub"> Subscribe</span>
            <span class=" text-sub-finally  hidden">Please wait,baby!</span>
            <span class="end-sub hidden">You are subscribed!</span>
          </button>
        </form>
      </div>

      <div class="flex flex-col gap-3 md:gap-4 2xl:gap-5">
        <div
          class="flex flex-row flex-wrap justify-center gap-y-2 text-sm md:text-base xl:text-xl 2xl:text-[22px] text-[#696984]">
          <a class="px-3 md:px-4 2xl:px-5 border-e-2 hover:text-white transition-colors" href="#">Careers</a>
          <a class="px-3 md:px-4 2xl:px-5 border-e-2 hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a class="px-3 md:px-4 2xl:px-5 hover:text-white transition-colors" href="#">Terms &amp; Conditions</a>
        </div>
        <p class="text-sm md:text-base xl:text-xl 2xl:text-[22px] text-center text-[#696984]">© 2021 Class Technologies
          Inc. </p>
      </div>

    </div>
  </footer>



  <!-- end footer -->
`





let btnSub = document.querySelector(".btn-sub")
let loading = document.querySelector(".loading")

let textFinally = document.querySelector(".text-sub-finally")

let inputSub = document.querySelector(".input-sub")

let textSub = document.querySelector(".text-sub")
let endSub = document.querySelector(".end-sub")
sub = true




btnSub.addEventListener("click", function () {


  if (inputSub.value.trim() === "") {
    console.log("hey")

  }

  else {

    if(sub===true){


    loading.classList.remove("hidden")
    textSub.classList.add("hidden")
    textFinally.classList.remove("hidden")
    sub=false
    
    setTimeout(function () {
      endSub.classList.remove("hidden")
      textFinally.classList.add("hidden")
      loading.classList.add("hidden")

    }, 3000);
    }
else{
      console.log("heyyyy")

}






  }

})




