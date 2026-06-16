const slides = document.querySelectorAll('.frame_media')
const texts = document.querySelectorAll('.text-item')
const dots = document.querySelectorAll('.dot')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const apartment = document.querySelectorAll('.apartment-item')
const repairTime = document.querySelectorAll('.repair-time')
const repairCost = document.querySelectorAll('.repair-cost')
const titleList = document.querySelectorAll('.title-list')

let currentIndex = 0;

function updateSlider(index) {
  slides.forEach(slide => slide.classList.remove('actives'))
  texts.forEach(slide => slide.classList.remove('actives'))
  dots.forEach(slide => slide.classList.remove('actives'))
  apartment.forEach(slide => slide.classList.remove('actives'))
  repairTime.forEach(slide => slide.classList.remove('actives'))
  repairCost.forEach(slide => slide.classList.remove('actives'))
  titleList.forEach(slide => slide.classList.remove('actives'))

  slides[index].classList.add('actives')
  texts[index].classList.add('actives')
  dots[index].classList.add('actives')
  apartment[index].classList.add('actives')
  repairTime[index].classList.add('actives')
  repairCost[index].classList.add('actives')
  titleList[index].classList.add('actives')
}

updateSlider(currentIndex);

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length
  updateSlider(currentIndex)
})
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length
  updateSlider(currentIndex)
})

dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    currentIndex = parseInt(e.target.getAttribute('data-index'))
    updateSlider(currentIndex)
  })
})