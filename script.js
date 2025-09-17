// Lógica para controlar toda la secuencia de bienvenida
document.addEventListener('DOMContentLoaded', () => {
    const retinaScanOverlay = document.getElementById('retinaScanOverlay');
    const introSequence = document.getElementById('introSequence');
    const antennaOnly = document.getElementById('antennaOnly');
    const fullLogo = document.getElementById('fullLogo');
    const mainContent = document.getElementById('mainContent');

    // Paso 1: Escaneo de retina (10 segundos)
    setTimeout(() => {
        // Oculta el overlay de escaneo
        retinaScanOverlay.style.opacity = '0';
        
        // Muestra la pantalla en blanco con la antena
        introSequence.style.opacity = '1';
        introSequence.style.display = 'flex'; // Asegura que la capa es visible
        
        setTimeout(() => {
            retinaScanOverlay.style.display = 'none';

            // Muestra la antena y aplica la animación de "emanar señal"
            antennaOnly.classList.remove('hidden');
            antennaOnly.classList.add('emanating-signal');
            antennaOnly.style.opacity = '1';
            antennaOnly.style.transform = 'scale(1)';

            // Paso 2: Animación de la antena (3 segundos)
            setTimeout(() => {
                // Detiene la animación de la señal
                antennaOnly.classList.remove('emanating-signal');
                
                // Muestra el logo completo
                fullLogo.classList.remove('hidden');
                fullLogo.style.opacity = '1';
                fullLogo.style.transform = 'translateY(0)';

                // Paso 3: Transición al contenido principal (2 segundos)
                setTimeout(() => {
                    // Oculta la secuencia de introducción
                    introSequence.style.opacity = '0';
                    
                    // Muestra el contenido principal de la página
                    mainContent.style.display = 'block';
                    mainContent.style.opacity = '1';

                    // Oculta por completo la secuencia de intro después de la transición
                    setTimeout(() => {
                        introSequence.style.display = 'none';
                    }, 1000); 

                }, 2000); // Espera 2 segundos para que el logo se vea completamente
            }, 3000); // 3 segundos de animación de la señal
        }, 1000); // 1 segundo para la transición de opacidad del overlay
    }, 11000); // 10s de escaneo + 1s para el mensaje
});

// Lógica para el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = this;
    const successMessage = document.getElementById('successMessage');

    form.style.display = 'none';
    successMessage.style.display = 'block';
});