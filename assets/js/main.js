/* ----- NAVIGATION BAR FUNCTION ----- */
function  myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  }else{
    menuBtn.className = "nav-menu";
  }
} 

  let next = document.querySelector('.next')
  let prev = document.querySelector('.prev')
   
  next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
  })
  prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
  })
/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function(){headerShadow()};

    function headerShadow(){
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
        } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }}
    
    
    /* ----- TYPING EFFECT ----- */
    var typingEffect = new Typed(".typedText",{
        strings : ["Human","Designer"],
        loop : true,
        typeSpeed : 100,
        backSpeed : 80,
        backDelay : 2000,
     })
   

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top', 
  distance: '80px',
  duration: 2000,
  reset: true
})

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100}) 
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.scroll-btn',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200}) 
  sr.reveal('.featured-image',{delay: 300})

  /* -- PROJECT BOX -- */
  sr.reveal('.projrcts-box',{interval: 100})
  sr.reveal('.about',{interval: 100})
  sr.reveal('.contact-info',{interval: 100})
  sr.reveal('.form-inputs',{interval: 100})
  sr.reveal('.text-area',{interval: 100})
  sr.reveal('.form-button',{interval: 100})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

  function pertemuan1(){
  window.location.href = "https://docs.google.com/file/d/1tmjhDGS9_3bvoU6HPd7nIsH3OUDI3OUw/edit?filetype=mspresentation";
  }
  function pertemuan2(){
  window.location.href = "https://docs.google.com/file/d/1FxfgBu8Bps60vLuw5-n2ujg-zkwwRRoK/edit?usp=docslist_api&filetype=mspresentation";
  }
  function pertemuan3(){
  window.location.href = "https://docs.google.com/file/d/1DiDez13gHhX7enzYYNTQgw099j-u1Idp/edit?usp=docslist_api&filetype=mspresentation";
  }
  function pertemuan4(){
  window.location.href = "https://youtu.be/TZwhoPJLTc0?si=0YZr_H4Y_ZKoNy6r";
  }
  function pertemuan5(){
  window.location.href = "https://youtu.be/RwDUzDmWDrM?si=YJHUkKx7cFm5Qy64";
  }
  function pertemuan6(){
  window.location.href = "https://id.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=contoh+soal+dalam+fungsi+exel&type=E211ID714G0&guccounter=1&guce_referrer=aHR0cHM6Ly9sbXMudW5pc251LmFjLmlkLw&guce_referrer_sig=AQAAAHxl7fcFawHLhtTxURylllqlK2w419Gg_dYXcxb8s21HlLkJdMEFCd1j6YDNWJElu3g3Y6sWIMC0HsehZoyQrndMLWI6AKvLIsRkymL7C-22TTP0gKufsmJdiOODvW9gEH7gJgPyJBbXEDMGZOiPwAA7sNBXNvpSlTaIZrDMg6Nl#id=29&vid=043a0a7c5b347895df14df79588345d2&action=view";
  }
  function pertemuan7(){
  window.location.href = "https://youtu.be/MCVkMmYL-aY?si=-4srUTESGpjGlBzS";
  }
  function pertemuan8(){
  window.location.href = "";
  }
  function pertemuan9(){
  window.location.href = "https://youtu.be/MIg5XPve7Fs?si=RkEM4ILJIptcLaHP";
  }
  function pertemuan10(){
  window.location.href = "https://qwords.com/blog/cara-membuat-wordpress-untuk-pemula/";
  }
  function pertemuan11(){
  window.location.href = "https://id.freepikcompany.com/v2/log-in?client_id=wepik&lang=en";
  }
  function pertemuan12(){
  window.location.href = "https://www.dewaweb.com/blog/contoh-database-terpopuler/#2_MySQL";
  }
  function pertemuan13(){
  window.location.href = "";
  }
  function pertemuan14(){
  window.location.href = "https://www.slideshare.net/rakhkha/komunikasi-dan-jaringan-komputer-125422189";
  }
  

  function Pertemuan2(){
    window.location.href = "https://docs.google.com/file/d/1upLD1okcEO72qKUTmHPMckdVIf9QE_Sf/edit?usp=docslist_api&filetype=msword";
    }
  function Pertemuan3(){
    window.location.href = "https://drive.google.com/file/d/1by97dAFgnwidW9TAYDkhKXyl-EvIdXEZ/view?usp=drivesdk";
    }
  function Pertemuan4(){
    window.location.href = "https://docs.google.com/file/d/1zLAbhBywqqCwyJ0kPmSh_EoyTLjxTESU/edit?usp=docslist_api&filetype=msword";
    }
  function Pertemuan6(){
    window.location.href = "https://drive.google.com/file/d/15YGexJrCu6mv6Nv4-mGSi-IwZOHiV1w3/view?usp=drivesdk";
    }
  function Pertemuan8(){
    window.location.href = "https://djadug.github.io/nikoo-djad";
    }
  function Pertemuan9(){
    window.location.href = "https://nicodjadugapriliano8.wordpress.com/";
    }
  function Pertemuan12(){
    window.location.href = "https://docs.google.com/file/d/1khHoT7vxjbxOz-dXMUogY1QQaJTQxtFe/edit?usp=docslist_api&filetype=msexcel";
    }
  function Pertemuan13(){
    window.location.href = "https://docs.google.com/file/d/1khHoT7vxjbxOz-dXMUogY1QQaJTQxtFe/edit?usp=docslist_api&filetype=msexcel";
    }
  function Pertemuan14(){
    window.location.href = "https://drive.google.com/file/d/1S4L7MK9Hi93BS4cPaN1gWa_r9luSM15T/view?usp=drivesdk";
    }

  function submitForm(){
    const form = document.getElementById("contactForm");
    const formAction = "https://formspree.io/nikodjaduga@gmail.com";
    form.setAttribute("action",formActiom);
    form.setAttribute("method","POST");
    form.submit();
  }