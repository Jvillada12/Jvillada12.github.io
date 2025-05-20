document.addEventListener('DOMContentLoaded', function() {
    // Animación para las habilidades
    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach((badge, index) => {
        setTimeout(() => {
            badge.classList.add('animated');
        }, 100 * index);
    });

    // Animación para los logros
    const achievements = document.querySelectorAll('.achievement');
    achievements.forEach((achievement, index) => {
        achievement.style.opacity = '0';
        achievement.style.transform = 'translateY(20px)';
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        achievement.style.transition = 'opacity 0.6s, transform 0.6s';
                        achievement.style.opacity = '1';
                        achievement.style.transform = 'translateY(0)';
                    }, 200 * index);
                    observer.unobserve(achievement);
                }
            });
        });
        
        observer.observe(achievement);
    });

    // Mejora para impresión
    document.querySelector('.print-button').addEventListener('click', function() {
        window.print();
    });

    // Agregar año actual en footer
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector('footer p').innerHTML = document.querySelector('footer p').innerHTML.replace('2025', yearSpan.textContent);
});