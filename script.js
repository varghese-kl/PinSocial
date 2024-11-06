var newbalance=document.querySelector('.navbar');
document.querySelector('.bars').onclick =() =>{

    newbalance.classList.toggle('active');
}






// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the 'show' class when element comes into view
// function addAnimationOnScroll() {
//     const boxes = document.querySelectorAll('.box2');

//     boxes.forEach((box) => {
//         if (isInViewport(box)) {
//             box.classList.add('show'); // Add 'show' class when in viewport
//         }
//     });
// }

// // Add event listener for scrolling
// window.addEventListener('scroll', addAnimationOnScroll);

// // Trigger animation on page load as well
// window.onload = addAnimationOnScroll;



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// document.addEventListener("DOMContentLoaded", function() {
//     const boxes = document.querySelectorAll('.box');

//     function checkScroll() {
//         const triggerBottom = window.innerHeight * 0.8; // Trigger animation when 80% of the viewport height is reached

//         boxes.forEach(box => {
//             const boxTop = box.getBoundingClientRect().top; // Get the position of the box relative to the viewport

//             if (boxTop < triggerBottom) {
//                 box.style.opacity = '1'; // Make the box visible
//                 box.style.transform = 'translateY(0)'; // Move it to original position
//             }
//         });
//     }

//     window.addEventListener('scroll', checkScroll);
//     checkScroll(); // Check scroll position on page load
// });
/////////////////////////////////////////////////////////////////////////////////////////////////////


document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.boxcontainer');
    const boxes = document.querySelectorAll('.box');
    let currentIndex = 0;
    const boxesPerSlide = 4;

    function slideBoxes() {
        // Calculate the width of one box and move by the appropriate amount
        const boxWidth = boxes[0].offsetWidth + parseFloat(getComputedStyle(container).gap);
        const maxIndex = Math.ceil(boxes.length / boxesPerSlide) - 1;
        
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0; // Reset to first slide
        }

        container.style.transform = `translateX(${-currentIndex * boxWidth * boxesPerSlide}px)`;
    }

    setInterval(slideBoxes, 3000); // Slide every 3 seconds
});
