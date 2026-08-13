// ClipFlex 360° — FNTT Grow
// script.js

document.addEventListener('DOMContentLoaded', function () {
    console.log('🌱 ClipFlex 360° — FNTT Grow');
    console.log('📌 Versão: 1.0.0');
    console.log('📦 Conteúdo da caixa: 5 peças + 1 adesivo');

    // ===============================
    // Efeito de hover nos itens da galeria
    // ===============================
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-6px) scale(1.03)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===============================
    // Efeito de hover nos cards de features
    // ===============================
    const features = document.querySelectorAll('.feature');

    features.forEach(feature => {
        feature.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-6px)';
        });

        feature.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // ===============================
    // Animação suave nos botões (opcional)
    // ===============================
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-support, .btn-download');

    buttons.forEach(btn => {
        btn.addEventListener('mousedown', function () {
            this.style.transform = 'scale(0.97)';
        });

        btn.addEventListener('mouseup', function () {
            this.style.transform = '';
        });

        btn.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });
});