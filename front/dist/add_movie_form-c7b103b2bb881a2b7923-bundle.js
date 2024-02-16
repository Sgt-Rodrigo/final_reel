(() => {
  "use strict";
  var e = document.querySelector("#clear-btn"),
    t = document.querySelector("#submit-btn"),
    n = document.querySelectorAll("#add-movie-form input");
  function c() {
    console.log("clearInputs called"),
      n.forEach(function (e) {
        return (e.value = "");
      });
  }
  document.addEventListener("DOMContentLoaded", function () {
    e.addEventListener("click", c);
  }),
    t.addEventListener("click", function (e) {
      !(function (e) {
        n.forEach(function (t) {
          t.value ||
            (e.preventDefault(),
            alert("C O M P L E T E   A L L   F I E L D S   M A T E!"));
        });
      })(e);
    });
})();
//# sourceMappingURL=add_movie_form-c7b103b2bb881a2b7923-bundle.js.map
