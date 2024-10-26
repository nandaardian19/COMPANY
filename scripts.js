function toggleMode() {
    var body = document.body;
    var toggleButton = document.getElementById('mode-toggle');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = '<img src="sun.png" alt="Light Mode">';
    } else {
        toggleButton.innerHTML = '<img src="moon.png" alt="Dark Mode">';
    }
}


document.addEventListener("DOMContentLoaded", updateDate);
function setLanguage(language) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        element.style.display = element.getAttribute("data-lang") === language ? "" : "none";
    });
    localStorage.setItem("preferredLanguage", language);
}
function showDetails(detailsId) {
    const detailsElement = document.getElementById(detailsId);
    if (detailsElement.style.display === "none") {
        detailsElement.style.display = "block";
    } else {
        detailsElement.style.display = "none";
    }
}
$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true
    });

    $('.carousel-item').on('click', function() {
        var category = $(this).data('category');
        loadPortfolioContent(category);
    });

    function loadPortfolioContent(category) {
        var content = '';
        if (category === 'foto-produk') {
            content = `
                <h3>Foto Produk</h3>
                <div class="gallery">
                    <div class="gallery-item">
                        <a href="brand1-foto-produk.html">
                            <img src="yt.png" alt="Brand 1">
                        </a>
                    </div>
                    <div class="gallery-item">
                        <a href="brand2-foto-produk.html">
                            <img src="oi.png" alt="Brand 2">
                        </a>
                    </div>
                    <div class="gallery-item">
                        <a href="brand3-foto-produk.html">
                            <img src="jh.png" alt="Brand 3">
                        </a>
                    </div>
                </div>`;
        } else if (category === 'manajemen-media-sosial') {
            content = `
                <h3>Manajemen Media Sosial</h3>
                <div class="gallery">
                    <div class="gallery-item">
                        <a href="brand1-strategi-media-sosial.html">
                            <img src="jup.png" alt="Brand 4">
                        </a>
                    </div>
                    <div class="gallery-item">
                        <a href="brand2-strategi-media-sosial.html">
                            <img src="GLIZ_HIJAB.png" alt="Brand 5">
                        </a>
                    </div>
                    <div class="gallery-item">
                        <a href="brand3-strategi-media-sosial.html">
                            <img src="ep.png" alt="Brand 6">
                        </a>
                    </div>
                </div>`;
        } else if (category === 'pengembangan-website') {
            content = `
                <h3>Pengembangan Website</h3>
                <div class="gallery">
                    <div class="gallery-item">
                        <a href="brand1-web-development.html">
                            <img src="rog.png" alt="Brand 7">
                        </a>
                    </div>
                    <div class="gallery-item">
                        <a href="brand2-web-development.html">
                            <img src="orgn.png" alt="Brand 8">
                        </a>
                    </div>
                    <div class="gallery-item">
                        <a href="brand3-web-development.html">
                            <img src="gar.png" alt="Brand 9">
                        </a>
                    </div>
                </div>`;
        } else if (category === 'host-live-shopping') {
            content = `
                <h3>Host Live Shopping</h3>
                <div class="gallery">
                    <div class="gallery-item">
                        <a href="brand1-live-shopping.html">
                            <img src="gar.png" alt="Brand 1">
                        </a>
                    </div>
                    <div class="gallery-item">
                        <a href="brand2-live-shopping.html">
                            <img src="gar.png" alt="Brand 2">
                        </a>
                    </div>
                    <div class="gallery-item">
                        <a href="brand3-live-shopping.html">
                            <img src="gar.png" alt="Brand 3">
                        </a>
                    </div>
                </div>`;
        }
        $('#portfolio-content').html(content);
    }
});


document.addEventListener("DOMContentLoaded", () => {
    updateDate();
    const preferredLanguage = localStorage.getItem("preferredLanguage") || "id";
    setLanguage(preferredLanguage);
});



