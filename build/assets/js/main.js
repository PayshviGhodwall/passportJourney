(function () {
  $(".choose_section").owlCarousel({
    autoplay: false,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    dots: false,
    autoHeight: true,
    loop: false,
    nav: true,
    fade: true,
    items: 8,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      580: {
        items: 3,
      },
      768: {
        items: 5,
      },
      1024: {
        items: 6,
      },
      1200: {
        items: 8,
      },
    },
  });

  $(document).ready(function () {
    $(".sidebar_btn").on("click", function () {
      $(".siderbar_section").toggleClass("hide_sidebar");
      $(".admin_main").toggleClass("admin_full");
    });
  });

  $(document).ready(function () {
    $(".toggle-password").click(function () {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  });

  $(document).ready(function () {
    $(".multiple-select-custom-field").select2({
      theme: "bootstrap-5",
      width: $(this).data("width")
        ? $(this).data("width")
        : $(this).hasClass("w-100")
        ? "100%"
        : "style",
      placeholder: $(this).data("placeholder"),
      closeOnSelect: false,
      tags: true,
    });
  });

  $(document).ready(function () {
    var readURL = function (input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $(".profile-pic").attr("src", e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
      }
    };

    $(".file-upload").on("change", function () {
      readURL(this);
    });

    $(".upload-button").on("click", function () {
      $(".file-upload").click();
    });
  });

  $(".Plan_category_slider").owlCarousel({
    autoplay: false,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    dots: false,
    loop: true,
    autoWidth: false,
    nav: true,
    fade: true,
    items: 8,
    autoplayHoverPause: true,
  });

  // const glightbox = GLightbox({
  //     selector: '.glightbox'
  //   });

  const video = document.getElementsByClassName("video");
  // const circlePlayButton = document.getElementsByClassName("circle-play-b");
  // console.log('asdasdas', video);

  var circlePlayButton = document.getElementsByClassName("circle-play-b");
  for (var i = 0; i < circlePlayButton.length; i++) {
    //  var a = i;
    //  alert(a);
    circlePlayButton[i].addEventListener(
      "click",
      function () {
        // console.log('asasd',a);
        var btn = this;
        var a = btn.getAttribute("data-video-id");
        if (video[a].paused || video[a].ended) {
          video[a].play();
        } else {
          video[a].pause();
        }
        video[a].addEventListener("playing", function () {
          btn.style.opacity = 0;
        });
        video[a].addEventListener("pause", function () {
          btn.style.opacity = 1;
        });
      },
      false
    );
  }

  // circlePlayButton[0].addEventListener("click", togglePlay);
  // video.addEventListener("playing", function () {
  //    circlePlayButton.style.opacity = 0;
  // });
  // video.addEventListener("pause", function () {
  //    circlePlayButton.style.opacity = 1;
  // });

  $(document).ready(function () {
    $(".minus").click(function () {
      var $input = $(this).parent().find("input");
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $(".plus").click(function () {
      var $input = $(this).parent().find("input");
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  });
})();
