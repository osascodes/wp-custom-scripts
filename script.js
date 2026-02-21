add_action('wp_head', function () { ?>
<script>
document.addEventListener("DOMContentLoaded", function () {
	
    const header = document.querySelector('.site-header');
    const hero   = document.querySelector('.elementor-element, .hero-section');

    if (!header || !hero) return;

    let heroHeight = hero.offsetHeight * 0.85;

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
