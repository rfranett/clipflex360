// Script do ClipFlex 360°

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌱 ClipFlex 360° — FNTT Grow');

    // Adiciona efeito de hover nos itens da caixa
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Mensagem de boas-vindas no console (para desenvolvedores)
    console.log('📦 ClipFlex 360° — Conteúdo da caixa:');
    console.log('  🔩 5 peças');
    console.log('  🏷️ 1 adesivo');
    console.log('  📱 1 QR Code');

    // Versão do produto
    const version = '1.0.0';
    console.log('📌 Versão: ' + version);
});