$(function () {
	// This For Toggle Class Button Collapse In Navbar Mobile
	$("button.navbar-toggler").click(function () {
		$(this).find("i").toggleClass("fa-bars fa-times");

		console.log("Clicked");
	});

	// This For Toggle background Fixed Navbar In large Screen
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 200) {
			$("nav.navbar").removeClass("navCustomizeLg");
		} else {
			$("nav.navbar").addClass("navCustomizeLg");
		}
	});

	// This is For Swiper trusted
	var swiper = new Swiper(".trusted-swiper", {
		loop: true,
		slidesPerView: 1,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		grabCursor: true,
		breakpoints: {
			580: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
		},
	});

	// This is For Swiper Testimonials
	var swiper2 = new Swiper(".testim-swiper", {
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	// This For label Felid Focus And Blur
	$(".form-control").focus(function () {
		$(this).next("label").addClass("focus");
	});

	$(".form-control").blur(function () {
		if ($(this).val() == "") {
			$(this).next("label").removeClass("focus");
		}
	}); //End

	// This Four Validate Forms

	// Example starter JavaScript for disabling form submissions if there are invalid fields
	// (function () {
	//   window.addEventListener('load', function () {
	//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
	//     var forms = document.getElementsByClassName('needs-validation');
	//     // Loop over them and prevent submission
	//     var validation = Array.prototype.filter.call(forms, function (form) {
	//       form.addEventListener('submit', function (event) {
	//         if (form.checkValidity() === false) {
	//           event.preventDefault();
	//           event.stopPropagation();
	//         }
	//         form.classList.add('was-validated');
	//       }, false);
	//     });
	//   }, false);
	// })();

	var forms = $(".needs-validation");

	forms.on("submit", function (e) {
		if (this.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}

		$(this).addClass("was-validated");
	});
}); //End Jquery
