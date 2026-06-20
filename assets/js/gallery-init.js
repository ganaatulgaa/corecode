// Initialise every gallery on the page. Generic version (no Liquid templating)
// so it can live in an external file and satisfy script-src 'self'.
$(document).ready(function () {
  $('.image-gallery').each(function () {
    var $gallery = $(this);

    // lightGallery
    $gallery.lightGallery({
      thumbnail: false,
      selector: '.image'
    });

    // Isotope masonry layout
    var iso = $gallery.isotope({
      percentPosition: true,
      itemSelector: '.image-wrapper',
      masonry: {
        columnWidth: '.image-wrapper'
      }
    });

    // Re-layout as images finish loading
    $gallery.imagesLoaded().progress(function () {
      iso.isotope('layout');
    });
  });
});
