document.getElementById('startButton').addEventListener('click', function() {
    // Hide the button
    this.style.opacity = '0';
    setTimeout(() => {
        this.style.display = 'none';
    }, 300);

    // Show elements
    const pigeon = document.querySelector('.pigeon');
    const scroll = document.querySelector('.scroll');
    const scrollContent = document.querySelector('.scroll-content');
    
    pigeon.style.visibility = 'visible';
    scroll.style.visibility = 'visible';
    
    // Start pigeon animation
    setTimeout(() => {
        pigeon.classList.add('animate');
        
        // When pigeon reaches middle (2.5s), open the letter
        setTimeout(() => {
            scroll.classList.add('animate');
            
            // Show message 0.2s after scroll starts opening
            setTimeout(() => {
                scrollContent.classList.add('animate');
                
                // Wait 1s after message appears, then fly away
                setTimeout(() => {
                    pigeon.style.animation = 'flyAway 3s forwards';
                }, 1000);
            }, 200);
        }, 2500);
    }, 100);
});