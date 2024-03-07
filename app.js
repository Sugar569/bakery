//ハンバーガーメニュー
const ham = document.querySelector("#js-hamburger");
const menu = document.querySelector("#js-menu-sp");
        
ham.addEventListener("click" , function () {
  ham.classList.toggle("active");
  menu.classList.toggle("active");
});


//フェードイン
const conceptB = document.querySelector(".concept-box-b");
const conceptC = document.querySelector(".concept-box-c");
const about = document.querySelector(".about-img");
const blogContents = document.querySelector(".blog-contents");
const blogHaru = document.querySelector(".haru");
const blogHuyu = document.querySelector(".huyu");
const blogNatsu = document.querySelector(".natsu");

gsap.fromTo( conceptB , {opacity: 0 , y: 20} , {opacity: 1 , y: 0 , scrollTrigger: {
      trigger: conceptB , start: 'top 70%',
      }
  });
gsap.fromTo( conceptC , {opacity: 0 , y: 20} , {opacity:1 , y: 0 , scrollTrigger: {
      trigger: conceptC , start: 'top 70%',
    }
  });
gsap.fromTo( about , {opacity: 0 , y: 20} , {opacity:1 , y: 0 , scrollTrigger: {
      trigger: about , start: 'top 70%',
    }
  });
gsap.fromTo( blogHaru , {opacity: 0 , y: 20} , {opacity:1 , y: 0 , scrollTrigger: {
      trigger: blogContents , start: 'top 70%',
    }
  });
gsap.fromTo( blogHuyu , {opacity: 0 , y: 20} , {opacity:1 , y: 0 , delay: 0.2 , scrollTrigger: {
      trigger: blogContents , start: 'top 70%', 
    }
  });
gsap.fromTo( blogNatsu , {opacity: 0 , y: 20} , {opacity:1 , y: 0 , delay: 0.4 ,  scrollTrigger: {
      trigger: blogContents , start: 'top 70%', 
    }
  });


//スライドショー
const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  } ,
  loop: true,
  autoplay: {
		delay: 8000,
		disableOnInteraction: true
	},
});

