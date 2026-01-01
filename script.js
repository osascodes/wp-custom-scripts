add_action('wp_head', function () { ?>
<script>
document.addEventListener("DOMContentLoaded", function () {
	
    const header = document.querySelector('.site-header');
    const hero   = document.querySelector('.elementor-element, .hero-section');

    if (!header || !hero) return;

    // Slightly reduce trigger height so it switches faster
    let heroHeight = hero.offsetHeight * 0.85;  // 85% height → no delay

    window.addEventListener("scroll", function () {
        if (window.scrollY > heroHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

});
</script>
<?php });
