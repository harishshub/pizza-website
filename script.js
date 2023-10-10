$(document).ready(function() {
    // Smooth scrolling for sidebar links
    $('a.nav-link').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

    // Highlight the active category in the sidebar
    $(window).on('scroll', function() {
        var scrollPosition = $(this).scrollTop();

        $('section').each(function() {
            var sectionTop = $(this).offset().top - 50; // Adjust as needed
            var sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                var sectionId = $(this).attr('id');
                $('#sidebar .nav-link').removeClass('active');
                $('#sidebar .nav-link[href="#' + sectionId + '"]').addClass('active');
            }
        });
    });
});
