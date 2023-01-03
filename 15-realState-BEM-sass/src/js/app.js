const RefImages = document.querySelectorAll('.propiedad__imagen');
 
window.addEventListener('scroll', () => { 
    RefImages.forEach(img => {
        const scrollY = this.scrollY / -20; 
        img.style.backgroundPositionY = `${scrollY}px`;
  });
});