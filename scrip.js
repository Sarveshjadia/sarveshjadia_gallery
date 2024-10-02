
const imageContainer = document.getElementById('imageContainer');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightboxButton = document.getElementById('closeLightbox');
const images = [
    
        { src: 'https://i.pinimg.com/originals/16/23/d0/1623d0817a308cdb3a8468f77f8bb155.jpg', thumb: 'https://i.pinimg.com/originals/16/23/d0/1623d0817a308cdb3a8468f77f8bb155.jpg', caption: 'Image 1' },
        { src: 'https://i.pinimg.com/736x/4a/af/1a/4aaf1a1e32405a91cf609d252cfa19d8.jpg', thumb: 'https://i.pinimg.com/736x/4a/af/1a/4aaf1a1e32405a91cf609d252cfa19d8.jpg', caption: 'Image 2' },
        { src: 'https://i.pinimg.com/550x/16/23/d0/1623d0817a308cdb3a8468f77f8bb155.jpg', thumb: 'https://i.pinimg.com/550x/16/23/d0/1623d0817a308cdb3a8468f77f8bb155.jpg', caption: 'Image 3' },
        { src: 'https://i.pinimg.com/736x/b4/dc/c8/b4dcc86572d0289ce09266b35c974576.jpg', thumb: 'https://i.pinimg.com/736x/b4/dc/c8/b4dcc86572d0289ce09266b35c974576.jpg', caption: 'Image 4' },
        { src: 'https://things2.do/blogs/wp-content/uploads/2024/08/Garba-1600x900-1.png', thumb: 'https://things2.do/blogs/wp-content/uploads/2024/08/Garba-1600x900-1.png', caption: 'Image 5' },
        { src: 'https://i.pinimg.com/736x/27/e9/5e/27e95ee64271b1b488c0cf6290d45eaf.jpg', thumb: 'https://i.pinimg.com/736x/27/e9/5e/27e95ee64271b1b488c0cf6290d45eaf.jpg', caption: 'Image 6' },
        { src: 'https://cultureandheritage.org/wp-content/uploads/2020/01/1b-6.jpg', thumb: 'https://cultureandheritage.org/wp-content/uploads/2020/01/1b-6.jpg', caption: 'Image 7' },
        { src: 'https://images.news18.com/ibnlive/uploads/2023/10/news18-bl-zb-2023-10-4be952177be56ad498cf40cc23f8e02c-16x9.jpg', thumb: 'https://images.news18.com/ibnlive/uploads/2023/10/news18-bl-zb-2023-10-4be952177be56ad498cf40cc23f8e02c-16x9.jpg', caption: 'Image 8' },
        { src: 'https://akm-img-a-in.tosshub.com/sites/indiacontent/0/images/product/public/29072019/00/01/56/43/93/62/55/75/1564393625575/659-artistes-perform-a-traditional-garba-dance-during-vibrant-navratri-image-b17e41894f6629aff27efe1c09d4f471-IANS.jpg', thumb: 'https://akm-img-a-in.tosshub.com/sites/indiacontent/0/images/product/public/29072019/00/01/56/43/93/62/55/75/1564393625575/659-artistes-perform-a-traditional-garba-dance-during-vibrant-navratri-image-b17e41894f6629aff27efe1c09d4f471-IANS.jpg', caption: 'Image 9' },

    
    
];

function createImageElements() {
    imageContainer.innerHTML = '';
    images.forEach(image => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        imageItem.innerHTML = `
            <img src="${image.thumb}" alt="${image.caption}">
            <div class="caption">${image.caption}</div>
        `;
        imageItem.onclick = () => openLightbox(image.src);
        imageContainer.appendChild(imageItem);
    });
}

function openLightbox(src) {
    lightboxImage.src = src;
    lightbox.style.display = 'block';
    setTimeout(() => {
        lightbox.classList.add('active');
    }, 50);
}

function closeLightbox() {
    lightbox.classList.remove('active');
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300);
}

closeLightboxButton.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

createImageElements();
