$(document).ready(function () {
  // Evenimentul de logare si modificare a paginii

  $("#btnlogin").click(function () {
    if (
      $("#inemail3").val() == "ale_filip89@yahoo.com" &&
      $("#inpswd3").val() == "Ilbah"
    ) {
      window.location.href = "user.html";
    } else {
      alert("Numele de utilizator sau parola este gresita!");
    }
  });

  // Modificarea pozei de profil

  $("#btnimage").click(function () {
    $("#img1").attr("src", $("#in0").val());
  });

  // Evenimentul de completare a datelor personale in pagina de utilizator

  $("#btnsave").click(function () {
    $("#p1").text("Numele       : " + $("#in1").val());
    $("#p2").text("Prenumele    : " + $("#in2").val());
    $("#p3").text("Data nasterii: " + $("#in3").val());
    $("#p4").text("Email        : " + $("#inemail4").val());
  });

  // Evenimentul de click pe data curenta

  // Evenimentul de revenire pe index.html

  $("#btncancel").click(function () {
    window.location.href = "index.html";
  });
});
