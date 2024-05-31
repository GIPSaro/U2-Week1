window.addEventListener("scroll", function () {
  const nav = document.getElementById("navContainer");
  const btn = document.getElementById("btnChange");
  const scrollPosition = window.scrollY;
  if (scrollPosition > 200) {
    nav.style.backgroundColor = "white";
    btn.style.backgroundColor = "#1a8917";
  } else {
    nav.style.backgroundColor = "#ffc017";
    btn.style.backgroundColor = "#191919";
  }
});
