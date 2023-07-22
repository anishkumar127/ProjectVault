function onShow() {
  const dark = document.getElementById("dark");

  const light = document.getElementById("light");

  dark.classList.toggle("dark");

  const dg = dark.classList.contains("dark");

  if (!dg) {
    light.classList.add("light");
  } else {
    light.classList.remove("light");
  }

  //   BODY
  const bg = document.getElementById("bg");
  bg.classList.toggle("dark-color-body");

  //   /
  let bg_color = document.getElementById("bg_color");
  bg_color.classList.toggle("bg-color");
  //
}
