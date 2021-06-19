// // Script

const mainNav = document.querySelector(".mainNav");
let sticky = mainNav.offsetTop;

window.addEventListener("scroll", () => {
	if(window.pageYOffset >= sticky) {
		mainNav.classList.add("sticky");
	} else {
		mainNav.classList.remove("sticky");
	}
});

// Border Bottom
const mainListItem = document.querySelectorAll(".mainListItem");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
	let YCordNate = window.pageYOffset;

	sections.forEach((section) => {
		if(YCordNate > 350 && YCordNate < 2200) {
			removeBorder();
			mainListItem[0].style.borderBottom = "0.2rem solid var(--orange)";
		} else if (YCordNate > 2401 && YCordNate < 3300) {
			removeBorder();
			mainListItem[1].style.borderBottom = "0.2rem solid var(--orange)";
		} else if (YCordNate > 3301 && YCordNate < 4400) {
			removeBorder();
			mainListItem[2].style.borderBottom = "0.2rem solid var(--orange)";
		} else if (YCordNate > 4401 && YCordNate < 5700) {
			removeBorder();
			mainListItem[3].style.borderBottom = "0.2rem solid var(--orange)";
		} else if (YCordNate > 5701 && YCordNate < 6300) {
			removeBorder();
			mainListItem[4].style.borderBottom = "0.2rem solid var(--orange)";
		} else if (YCordNate > 6301 && YCordNate < 7400) {
			removeBorder();
			mainListItem[5].style.borderBottom = "0.2rem solid var(--orange)";
		} else if (YCordNate > 7401 && YCordNate < 8300) {
			removeBorder();
			mainListItem[6].style.borderBottom = "0.2rem solid var(--orange)";
		} else {
			removeBorder();
		}
	});
});

removeBorder = () => {
	mainListItem.forEach(border => {
		border.style.borderBottom = "none";
	});
}


// Itinerary
const showItinerary = document.querySelectorAll(".showItinerary");
const itineraryContent = document.querySelectorAll(".itineraryContent");

showItinerary.forEach(show => {
	show.addEventListener("click", () => {
		itineraryContent.forEach(itineray => {
			itineray.classList.toggle("show");
		});
	});
});

// FAQs
const faqHeader = document.querySelectorAll(".faqHeader");
const faqBody = document.querySelectorAll(".faqBody");

faqHeader.forEach((header,idx) => {
	header.addEventListener("click", () => {
		faqBody[idx].classList.toggle("show");
		header.classList.toggle("rotate");
	});
});


// Expand FAQs
const expand = document.querySelector(".expand"); 
const expandSpan = document.querySelector(".expand span"); 

expand.addEventListener("click", () => {
	faqBody.forEach(body => {		
		body.classList.toggle("show");	
		if(body.classList.contains("show")) {
			expandSpan.innerHTML = "Collapse All";
			expandSpan.nextElementSibling.classList.replace("fa-plus", "fa-minus");
		} else {
			expandSpan.innerHTML = "Expand All";			
			expandSpan.nextElementSibling.classList.replace("fa-minus", "fa-plus");
		}
	
	});
	
	faqHeader.forEach(header => {
		header.classList.toggle("rotate");
	});	

});


const reset = () => {
	faqHeader.forEach(header => {
		if(header.classList.contains("rotate")) {
			header.classList.remove("rotate");		
		} 
	});

	faqBody.forEach(body => {
		if(body.classList.contains("show")) {
			body.classList.remove("show");
		} 	
	});
}

// Travelers Review
const showMore = document.querySelectorAll(".showMore");
const travReviewBody = document.querySelectorAll(".travReviewBody");

showMore.forEach((show,idx) => {
	show.addEventListener("click", () => {
		travReviewBody[idx].classList.toggle("appear");

		if(travReviewBody[idx].classList.contains("appear")) {
			show.innerHTML = "Show Less<span><i class=\"fas fa-chevron-up\"></i></span>";
		} else {
			show.innerHTML = "Show More<span><i class=\"fas fa-chevron-down\"></i></span>";
		}
	});
});

// Show Reviews
const showButton = document.querySelector(".showReviewsContent button");
const reviewsContent = document.querySelector(".travReviewsContent");

showButton.addEventListener("click", () => {
	reviewsContent.classList.toggle("expand");

	if(reviewsContent.classList.contains("expand")) {
		showButton.innerText = "Show Less Reviews";
	} else {
		showButton.innerText = "Show More Reviews";
	}
});

// copyright
const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();