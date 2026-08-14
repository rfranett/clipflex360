// =========================================================
// CLIPFLEX 360° — FNTT GROW
// SCRIPT.JS
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("🌱 ClipFlex 360° — FNTT Grow");
    console.log("📦 Kit: 5 unidades");
    console.log("🔧 Produto: já montado");
    console.log("💰 Preço sugerido: R$ 21,90");
    console.log("🖨️ STL: acesso através do QR Code da embalagem");


    // =====================================================
    // GALERIA
    // =====================================================

    const galleryItems =
        document.querySelectorAll(".gallery-item");


    galleryItems.forEach((item) => {

        item.addEventListener("mouseenter", () => {

            item.style.transform =
                "translateY(-5px) scale(1.02)";

        });


        item.addEventListener("mouseleave", () => {

            item.style.transform =
                "translateY(0) scale(1)";

        });

    });


    // =====================================================
    // BOTÕES
    // =====================================================

    const buttons =
        document.querySelectorAll(
            ".btn-secondary, .btn-support"
        );


    buttons.forEach((button) => {

        button.addEventListener("mousedown", () => {

            button.style.transform =
                "scale(0.97)";

        });


        button.addEventListener("mouseup", () => {

            button.style.transform = "";

        });


        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });

});