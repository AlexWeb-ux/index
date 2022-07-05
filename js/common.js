document.addEventListener("DOMContentLoaded", () => {
  var count = ["1", "2", "3"];
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<p class="' + className + '">' + ("#0" + count[index]) + "</p>";
      },
    },
  });
});
