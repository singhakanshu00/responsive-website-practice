const menuToggle = document.querySelector(".toggle");
      const navActive = document.querySelector(".nav");
      const logoActive = document.querySelector(".logo");
      const navbarActive = document.querySelector(".navbar");
      const buttonActive = document.querySelector(".button");
      const hamActive = document.querySelector(".hamburger");
      const btn1 = document.querySelector(".btn1");
      const btn2 = document.querySelector(".btn2");
      const home = document.querySelector(".homepage");
      const main = document.querySelector(".main");
      const foot = document.querySelector(".footer_wrapper");
      const header = document.querySelector(".header-main");

      menuToggle.addEventListener("click", () => {
        if (menuToggle.classList.contains("active")) {
          menuToggle.classList.remove("active");
          navActive.classList.remove("active");
          logoActive.classList.remove("active");
          navbarActive.classList.remove("active");
          buttonActive.classList.remove("active");
          hamActive.classList.remove("active");
          btn1.classList.remove("active");
          btn2.classList.remove("active");
          home.classList.remove("active");
          main.classList.remove("active");
          foot.classList.remove("active");
        } else {
          menuToggle.classList.toggle("active");
          navActive.classList.toggle("active");
          logoActive.classList.toggle("active");
          navbarActive.classList.toggle("active");
          buttonActive.classList.toggle("active");
          hamActive.classList.toggle("active");
          btn1.classList.toggle("active");
          btn2.classList.toggle("active");
          home.classList.toggle("active");
          main.classList.toggle("active");
          foot.classList.toggle("active");
        }
      });
      var last_scroll_top = 0;
      header.addEventListener("scroll", ()=>{
          var st = window.pageYOffset || document.getElementsByClassName(".header-main").scrollTop;
          if(st>last_scroll_top){
            header.classList.toggle("scrolled");
          }
      })