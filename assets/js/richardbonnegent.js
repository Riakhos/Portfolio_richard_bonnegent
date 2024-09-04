/*!
=========================================================
* RichardBonnegent Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// portfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


// google maps
function initMap() {
// Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.947548, lng: 2.244236},
        zoom: 12,
        scrollwheel:  false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
  }

// Print Cv + Richard Bonnegent    
function printfile() {
    // Ouvre le fichier PDF dans une nouvelle fenêtre
    var fileUrl = "./imgs/cv_richardbonnegent.pdf"; // Chemin vers le fichier PDF
    window.open(fileUrl, '_blank');
}

// Compteur de likes blog

//!Compteur de likes version origin sans BDD pour récupérer le nombre de likes

function incrementLike() {
  var likeCountElement = document.getElementById("like-count");
  var likeCount = parseInt(likeCountElement.innerText);
  likeCount++;
  likeCountElement.innerText = likeCount;
}
function incrementLike1() {
  var likeCountElement1 = document.getElementById("like-count1");
  var likeCount1 = parseInt(likeCountElement1.innerText);
  likeCount1++;
  likeCountElement1.innerText = likeCount1;
}
function incrementLike2() {
  var likeCountElement2 = document.getElementById("like-count2");
  var likeCount2 = parseInt(likeCountElement2.innerText);
  likeCount2++;
  likeCountElement2.innerText = likeCount2;
}


// Compteur de commentaires blog

//!Compteur de comment sans BDD pour conserver les commentaires

function incrementComment() {
  var commentCountElement = document.getElementById("comment-count");
  var commentCount = parseInt(commentCountElement.innerText);
  commentCount++;
  commentCountElement.innerText = commentCount;
}
function incrementComment1() {
  var commentCountElement1 = document.getElementById("comment-count1");
  var commentCount1 = parseInt(commentCountElement1.innerText);
  commentCount1++;
  commentCountElement1.innerText = commentCount1;
}
function incrementComment2() {
  var commentCountElement2 = document.getElementById("comment-count2");
  var commentCount2 = parseInt(commentCountElement2.innerText);
  commentCount2++;
  commentCountElement2.innerText = commentCount2;
}