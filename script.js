window.addEventListener('load', function() {
    // Ensure the loading screen is displayed during the initial page load
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.body.style.overflow = 'auto';
    }, 100); // Adjust timeout as needed (in milliseconds)
});

var currentImageIndex = 0;
var images = [];

// Function to open the lightbox with the clicked image
function openLightbox(element) {
    images = Array.from(document.querySelectorAll('.sh-image__image')); // Collect all images
    currentImageIndex = images.indexOf(element.querySelector('img')); // Set current index
    showImage(currentImageIndex);
    document.getElementById('lightbox').style.display = 'flex'; // Show lightbox
}

// Function to close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none'; // Hide lightbox
}

// Function to show the image at the specified index
function showImage(index) {
    var lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = images[index].src; // Set the src of the lightbox image
}

// Function to show the previous image
function prevImage() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    showImage(currentImageIndex);
}

// Function to show the next image
function nextImage() {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    showImage(currentImageIndex);
}

function shareContent() {
    if (navigator.share) {
        navigator.share({
            title: 'Check out this page',
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(err => {
            console.error('Error sharing:', err);
        });
    } else {
        // Fallback for browsers that do not support the Web Share API
        alert('Sharing is not supported on this browser.');
    }
}

function toggleShareMenu() {
    var menu = document.getElementById('share-menu');
    menu.classList.toggle('show');
}

function copyLink() {
    var url = window.location.href;
    navigator.clipboard.writeText(url).then(function() {
        alert('Link copied to clipboard!');
    }, function(err) {
        console.error('Failed to copy: ', err);
    });
}
