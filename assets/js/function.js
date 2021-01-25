$("body").delegate(".FAQ", "click", function () {
  console.log("Hi!");
  $(".FAQ").removeClass("FAQ--active");
  $(this).addClass("FAQ--active");
});
