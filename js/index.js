$(document).ready(function () {
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 55) {
      $("header nav").addClass("fixed-top");
    } else {
      $("header nav").removeClass("fixed-top");
    }
    var scroll = $(window).scrollTop();
  });
  $(".slick-prev").addClass("slick-prev-animate");
  $("#click").change(function () {
    // Toggle the class based on the checkbox state
    $(".overlay").toggleClass("display", this.checked);
  });
  $("#click").change(function () {
    if ($(this).is(":checked")) {
      $("nav ul").css("left", "0");
    } else {
      // If you want to reset the style when unchecked
      $("nav ul").css("left", "-100%"); // Reset to default value or any other value you want
    }
  });

  // click outside nav to close it
  $("#click").change(function () {
    // Toggle the class based on the checkbox state
    $(".overlay").toggleClass("display", this.checked);
  });

  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-xmark");
  });
  // end-navbar

  // language-toggle-btn
  $(".language-button").click(function () {
    $(this).text($(this).text() == "English" ? "Arabic" : "English");
  });

  // product-details-modal
  $("#openModalBtn").click(function () {
    $("#modal").fadeIn();
  });

  // Close modal when the close button or outside the modal is clicked
  $(".close, .modal").click(function () {
    $("#modal").fadeOut();
  });

  // Prevent modal from closing when clicking inside the modal content
  $(".modal-content").click(function (event) {
    event.stopPropagation();
  });
  // end-modal

  // review-stars
  /* 1. Visualizing things on Hover - See next part for action on click */
  $("#stars li")
    .on("mouseover", function () {
      var onStar = parseInt($(this).data("value"), 10); // The star currently mouse on

      // Now highlight all the stars that's not after the current hovered star
      $(this)
        .parent()
        .children("li.star")
        .each(function (e) {
          if (e < onStar) {
            $(this).addClass("hover");
          } else {
            $(this).removeClass("hover");
          }
        });
    })
    .on("mouseout", function () {
      $(this)
        .parent()
        .children("li.star")
        .each(function (e) {
          $(this).removeClass("hover");
        });
    });

  /* 2. Action to perform on click */
  $("#stars li").on("click", function () {
    var onStar = parseInt($(this).data("value"), 10); // The star currently selected
    var stars = $(this).parent().children("li.star");

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass("selected");
    }

    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass("selected");
    }

    // JUST RESPONSE (Not needed)
    var ratingValue = parseInt(
      $("#stars li.selected").last().data("value"),
      10
    );
    var msg = "";
    if (ratingValue > 1) {
      msg = "Thanks! You rated this " + ratingValue + " stars.";
    } else {
      msg =
        "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
    responseMessage(msg);
  });
  // end-review-stars
});

