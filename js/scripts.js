var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

(function() {
  const passwordField = document.getElementById("password-input");
  const errorField = document.getElementById("password-caps-warning");

  passwordField.onkeydown = function(e) {
    if (e.getModifierState("CapsLock")) {
      errorField.classList.remove("d-none");
    } else {
      errorField.classList.add("d-none");
    }
  }
}());
