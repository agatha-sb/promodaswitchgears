

// ************************************************* //
// * +++++++++++ Fancybox Gallery ++++++++++++ * //
// ************************************************* //

Fancybox.bind('[data-fancybox="gallery-1"]', {
  caption: function (fancybox, slide) {
    const figurecaption = slide.triggerEl?.querySelector(".tab-caption");
    return figurecaption ? figurecaption.innerHTML : slide.caption || "";
  },
});
Fancybox.bind('[data-fancybox="customer-day"]', {
  caption: function (fancybox, slide) {
    const figurecaption = slide.triggerEl?.querySelector(".tab-caption");
    return figurecaption ? figurecaption.innerHTML : slide.caption || "";
  },
});

// ************************************************* //
// * +++++++++++++ Swiper Js ++++++++++++++ * //
// ************************************************* //




var swiper = new Swiper(".asb19__servicesThumb--swiper", {
  // spaceBetween: 10,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
  allowTouchMove: false,
});
var swiper2 = new Swiper(".asb19__services--swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next-service",
    prevEl: ".swiper-button-prev-service",
  },
  thumbs: {
    swiper: swiper,
  },
});

var productSwiper = new Swiper(".asb19__products--swiper", {
  autoplay: {
    delay: 8000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination", 
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-product",
    prevEl: ".swiper-button-prev-product",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    }
  }
});
var industriesSwiper = new Swiper(".asb19__industries-swiper", {
  loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination", 
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-industries",
    prevEl: ".swiper-button-prev-industries",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 32
    }
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("#asb19__culture-tab .nav-link");

  navLinks.forEach(link => {
    link.addEventListener("mouseenter", function () {
      let tab = new bootstrap.Tab(this);
      tab.show();
    });
  });
});


const videoContainer = document.getElementById("oakVideoWrap");
const playButton = document.getElementById("oakPlayBtn");

videoContainer.addEventListener("mousemove", function (event) {
	const containerRect = videoContainer.getBoundingClientRect();
	const mouseX = event.clientX - containerRect.left;
	const mouseY = event.clientY - containerRect.top;

	const buttonWidth = playButton.offsetWidth;
	const buttonHeight = playButton.offsetHeight;
	const buttonX = mouseX - buttonWidth / 2;
	const buttonY = mouseY - buttonHeight / 2;

	const maxButtonX = containerRect.width - buttonWidth;
	const maxButtonY = containerRect.height - buttonHeight;
	playButton.style.left = Math.min(Math.max(buttonX, 0), maxButtonX) + "px";
	playButton.style.top = Math.min(Math.max(buttonY, 0), maxButtonY) + "px";
});

videoContainer.addEventListener("mouseleave", function () {
	setTimeout(function () {
		playButton.style.left = "50%";
		playButton.style.top = "50%";
		playButton.style.transform = "translate(-50%, -50%) scale(1)";
		playButton.style.transition = "all 0.3s ease-out";
	}, 50);
});

videoContainer.addEventListener("mouseover", function () {
	playButton.style.transition = "transform ease-out 0.3s";
	playButton.style.transform = "scale(1.2)";
});

const video = document.getElementById("oakVideoItem");

videoContainer.addEventListener("mouseenter", function () {
	if (!video.paused) {
		playButton.style.opacity = "1";
	}
});

videoContainer.addEventListener("mouseleave", function () {
	if (!video.paused) {
		playButton.style.opacity = "0";
		playButton.style.transition = "opacity ease 1s";
	}
});

videoContainer.addEventListener("click", function () {
	if (video.paused) {
		video.play();
		playButton.innerHTML =
			'<span class="pause-icon">Pause</span>';
	} else {
		video.pause();
		playButton.innerHTML =
			'<span class="play-icon">Play</span>';
	}
});

video.addEventListener("ended", function () {
	playButton.innerHTML =
		'<span class="play-icon">Play</span>';
	playButton.style.opacity = "1";
});