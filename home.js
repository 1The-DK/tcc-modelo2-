(function () {

  // globals
  const menulateral = document.querySelector('.menulateral'),
    header_nav = document.querySelector('.header_nav'),
    header = document.querySelector('.header');

  // burger
  menulateral.addEventListener('click', function () {
    this.classList.toggle('active');
    header_nav.classList.toggle('open');
  })

  // header 
  window.onscroll = function () {
    if (
      document.body.scrollTop >= 1 ||
      document.documentElement.scrollTop >= 1
    ) {
      header.classList.add('header--scroll')
    } else {
      header.classList.remove('header--scroll')
    }
  }
  const slider = document.querySelectorAll('.slider');
  const btnPrev = document.getElementById('prev-button');
  const btnNext = document.getElementById('next-button');
  
  let currentSlide = 0;
  
  function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
  }
  
  function showSlider() {
    slider[currentSlide].classList.add('on')
  }
  
  function nextSlider() {
    hideSlider()
    if(currentSlide === slider.length -1) {
      currentSlide = 0
    } else {
      currentSlide++
    }
    showSlider()
  }
  
  function prevSlider() {
    hideSlider()
    if(currentSlide === 0) {
      currentSlide = slider.length -1
    } else {
      currentSlide--
    }
    showSlider()
  }
  
  btnNext.addEventListener('click', nextSlider)
  btnPrev.addEventListener('click', prevSlider)

})()