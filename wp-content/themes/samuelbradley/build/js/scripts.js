/*
 * Main Scripts
 * Author: All is Machine
 */
 
jQuery(document).ready(function() {

    /*
     * Replace all SVG images with inline SVG
     */
        jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });

        jQuery(window).on('load', function() {
          jQuery('.flexslider').flexslider({
            smoothHeight:true,
            directionNav:true,
            controlNav:false,
            slideshowSpeed:3000
          });
        });

        if (jQuery(".info-page")[0]){
            jQuery( "body" ).addClass( "bg--alt sticky-footer" );
        } else {
           
        }

        //on home page show first project image
        jQuery( ".portfolio-listing__item" ).first().addClass( "show-project-always" );
         
        // on hover of project - show image
        jQuery( ".portfolio-listing__item" ).hover(function() {
          jQuery( this ).toggleClass( "show-project" );
        });

        // on hover check if image is being shown, if so, remove first image class.
        jQuery( ".portfolio-listing__item" ).hover(function() {
            if (jQuery( ".portfolio-listing__item" ).hasClass( "show-project" )) {
              jQuery( ".portfolio-listing__item" ).removeClass( "show-project-always" );
            } else {
                jQuery( ".portfolio-listing__item" ).first().addClass( "show-project-always" );
            }
        });
  
}); /* end of as page load scripts */
