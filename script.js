// Image data structure
const images = [
    {
        id: 1,
        preview: 'https://i.postimg.cc/SR06GZnD/3.png',
        download: 'https://i.postimg.cc/SR06GZnD/3.png',
        category: 'coloring',
        ratio: 'ratio-16-9',
        title: 'Title1'
    },
    {
        id: 2,
        preview: 'https://i.postimg.cc/vZGvjS3K/5.png',
        download: 'https://i.postimg.cc/vZGvjS3K/5.png',
        category: 'coloring',
        ratio: 'ratio-16-9'
    },
    {
        id: 4,
        preview: 'https://i.postimg.cc/tR1vtfMt/122.png',
        download: 'https://i.postimg.cc/tR1vtfMt/122.png',
        category: 'activities',
        ratio: 'ratio-1-1'
    },
    {
        id: 5,
        preview: 'https://i.postimg.cc/z3Zgn3PM/123.png',
        download: 'https://i.postimg.cc/z3Zgn3PM/123.png',
        category: 'activities',
        ratio: 'ratio-1-1'
    },
    {
        id: 6,
        preview: 'https://i.postimg.cc/hjYxt28K/124.png',
        download: 'https://i.postimg.cc/hjYxt28K/124.png',
        category: 'stories',
        ratio: 'ratio-1-1'
    },
    {
        id: 7,
        preview: 'https://i.postimg.cc/XNwdbkG6/piclumen-1742783088121.jpg',
        download: 'https://i.postimg.cc/XNwdbkG6/piclumen-1742783088121.jpg',
        category: 'stories',
        ratio: 'ratio-3-4'
    },
    {
        id: 8,
        preview: 'https://i.postimg.cc/VLgtSsW7/piclumen-1742783110002.jpg',
        download: 'https://i.postimg.cc/VLgtSsW7/piclumen-1742783110002.jpg',
        category: 'graphics',
        ratio: 'ratio-3-4'
    },
    {
        id: 9,
        preview: 'https://i.postimg.cc/fTDXTSmt/piclumen-1742783117170.jpg',
        download: 'https://i.postimg.cc/fTDXTSmt/piclumen-1742783117170.jpg',
        category: 'coloring',
        ratio: 'ratio-3-4'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 10,
        preview: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        download: 'https://i.postimg.cc/50zvjwsv/12.jpg',
        category: 'stories',
        ratio: 'ratio-9-16'
    },
    {
        id: 11,
        preview: 'https://i.postimg.cc/MGv1JkR9/2.jpg',
        download: 'https://i.postimg.cc/MGv1JkR9/2.jpg',
        category: 'graphics',
        ratio: 'ratio-9-16'
    },
    {
        id: 12,
        preview: 'https://i.postimg.cc/xdhM0s3n/3.jpg',
        download: 'https://i.postimg.cc/xdhM0s3n/3.jpg',
        category: 'activities',
        ratio: 'ratio-9-16'
    }
];

// Global variables
let currentCategory = 'all';
let currentPage = 1;

// Active filters for search and filtering
// Removed duplicate declaration of activeFilters

// Hero Notification Section
document.querySelector(".adobe-link").onclick = function () {
    window.open("https://stock.adobe.com/your-profile", "_blank");
  };

  document.querySelector(".coffee-link").onclick = function () {
    window.open("https://www.buymeacoffee.com/yourpage", "_blank");
  };

  
// Initialize DOM elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.querySelector('.search-btn');
const aspectRatioFilter = document.getElementById('aspectRatioFilter');
const categoryFilter = document.getElementById('categoryFilter');
const categoryButtons = document.querySelectorAll('.category-btn');
const imageGrid = document.querySelector('.image-grid');
const loadMoreBtn = document.querySelector('.load-more-btn');
const closeBtn = document.querySelector('.close-btn');
const itemsPerPage = 20;
const adUrl = 'https://www.profitableratecpm.com/uw30m1nti9?key=46c870d1067a9f226912631ee691ebd7';

// DOM Elements
const downloadPopup = document.getElementById('downloadPopup');
const finalDownloadBtn = document.querySelector('.final-download-btn');
const progressBar = document.querySelector('.progress');
const timer = document.getElementById('timer');
const adFrame = document.getElementById('adFrame');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadImages();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentCategory = button.dataset.category;
            currentPage = 1;
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            imageGrid.innerHTML = '';
            loadImages();
        });
    });

    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        loadImages();
    });

    closeBtn.addEventListener('click', closePopup);
}

// Create Banner Ad
function createBannerAd() {
    const adContainer = document.createElement('div');
    adContainer.className = 'image-card banner-ad-card';
    
    const adScript1 = document.createElement('script');
    adScript1.type = 'text/javascript';
    adScript1.text = `
        atOptions = {
            'key' : 'eeee36920d7f3777ea9d09590b0ebd98',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : {}
        };
    `;
    
    const adScript2 = document.createElement('script');
    adScript2.type = 'text/javascript';
    adScript2.src = '//www.highperformanceformat.com/eeee36920d7f3777ea9d09590b0ebd98/invoke.js';
    
    adContainer.appendChild(adScript1);
    adContainer.appendChild(adScript2);
    
    return adContainer;
}


// Category button click events
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button UI
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update current category and refresh display
        currentCategory = button.dataset.category;
        loadImages();
    });
});

// Load images with both search and category filters
function loadImages() {
    // Clear existing images
    imageGrid.innerHTML = '';
    
    // Apply both search and category filters
    const filteredImages = images.filter(img => {
        const matchesSearch = !currentSearchTerm || 
            (img.title && img.title.toLowerCase().includes(currentSearchTerm));
        const matchesCategory = currentCategory === 'all' || 
            img.category === currentCategory;
        
        return matchesSearch && matchesCategory;
    });

    // Show no results message if no matches found
    if (filteredImages.length === 0) {
        const noResultsMsg = document.createElement('div');
        noResultsMsg.className = 'no-results';
        noResultsMsg.textContent = 'No matching items found';
        imageGrid.appendChild(noResultsMsg);
        return;
    }

    // Display filtered images
    filteredImages.forEach((img, index) => {
        const card = createImageCard(img);
        imageGrid.appendChild(card);
        
        // Add banner ad after every 6 images
        if ((index + 1) % 6 === 0) {
            imageGrid.appendChild(createBannerAd());
        }
    });
}

// Load Images
function loadImages() {
    // Clear existing images

    
    // Filter images based on selected category
    const filteredImages = images.filter(img => {
        return currentCategory === 'all' || img.category === currentCategory;
    });

    if (filteredImages.length === 0) {
        const noResultsMsg = document.createElement('div');
        noResultsMsg.className = 'no-results';
        noResultsMsg.textContent = 'No matching items found';
        imageGrid.appendChild(noResultsMsg);
        return;
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageImages = filteredImages.slice(startIndex, endIndex);

    pageImages.forEach((img, index) => {
        const card = createImageCard(img);
        imageGrid.appendChild(card);
        
        // Add banner ad after every 6 images
        if ((index + 1) % 6 === 0) {
            imageGrid.appendChild(createBannerAd());
        }
    });

    loadMoreBtn.style.display = endIndex >= filteredImages.length ? 'none' : 'block';
}

// Create Image Card
function createImageCard(img) {
    const card = document.createElement('div');
    card.className = 'image-card';
    
    const image = document.createElement('img');
    image.src = img.preview;
    image.alt = img.title;
    
    const imageInfo = document.createElement('div');
    imageInfo.className = 'image-info';
    
    const title = document.createElement('div');
    title.className = 'image-title';
    title.textContent = img.title || `Title${img.id}`;
    
    const aspectRatio = document.createElement('div');
    aspectRatio.className = 'aspect-ratio';
    aspectRatio.textContent = img.ratio.replace('ratio-', '').replace('-', ':');
    
    imageInfo.appendChild(title);
    imageInfo.appendChild(aspectRatio);
    
    const overlay = document.createElement('div');
    overlay.className = 'download-overlay';
    
    const previewBtn = document.createElement('button');
    previewBtn.className = 'preview-btn';
    previewBtn.innerHTML = '<i class="fas fa-search-plus"></i>';
    previewBtn.onclick = (e) => {
        e.stopPropagation();
        showPreviewModal(img.preview);
    };
    
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'download-btn';
    downloadBtn.innerHTML = '<i class="fas fa-download"></i>';
    downloadBtn.onclick = (e) => {
        e.stopPropagation();
        showDownloadPopup(img);
    };
    
    overlay.appendChild(previewBtn);
    overlay.appendChild(downloadBtn);
    
    card.appendChild(image);
    card.appendChild(imageInfo);
    card.appendChild(overlay);
    
    return card;
}

// Download Process
function startDownloadTimer(downloadUrl) {
    const timer = document.getElementById('timer');
    const progress = document.querySelector('.progress');
    const finalDownloadBtn = document.querySelector('.final-download-btn');
    let timeLeft = 3;

    timer.textContent = timeLeft;
    progress.style.width = '0%';
    finalDownloadBtn.style.display = 'none';

    const interval = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;
        progress.style.width = `${((3 - timeLeft) / 3) * 100}%`;

        if (timeLeft <= 0) {
            clearInterval(interval);
            finalDownloadBtn.style.display = 'block';
            finalDownloadBtn.onclick = () => {
                window.location.href = downloadUrl;
                setTimeout(() => {
                    document.getElementById('downloadPopup').style.display = 'none';
                }, 500);
            };
        }
    }, 1000);
}

function showDownloadPopup(img) {
    const popup = document.getElementById('downloadPopup');
    const adContainer = popup.querySelector('.ad-container');
    popup.style.display = 'flex';

    // Insert Adserra ad
    adContainer.innerHTML = `
        <script type="text/javascript">
        atOptions = {
            'key' : 'eeee36920d7f3777ea9d09590b0ebd98',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : {}
        };
        </script>
        <script type="text/javascript" src="//www.highperformanceformat.com/eeee36920d7f3777ea9d09590b0ebd98/invoke.js"></script>
    `;

    // Setup share buttons
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(btn => {
        btn.onclick = () => shareContent(btn.className.split(' ')[1], img.preview);
    });

    startDownloadTimer(img.download);
}

function shareContent(platform, imageUrl) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out this amazing resource from Kids Creative Hub!');
    
    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${url}&media=${encodeURIComponent(imageUrl)}&description=${text}`,
        whatsapp: `https://api.whatsapp.com/send?text=${text}%20${url}`
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
}

// Back to Top functionality
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Close Popup
function closePopup() {
    downloadPopup.style.display = 'none';
    adFrame.src = 'about:blank';
}
