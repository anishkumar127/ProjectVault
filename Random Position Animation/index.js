let a = document.querySelector("#jumping");

async function handleJump() {
  if (a.getAttribute("style")) {
    a.removeAttribute("style");
  } else {
    let b = parseInt(Math.random() * 7);
    let c = parseInt(Math.random() * 7);
    let d = parseInt(Math.random() * 12);
    let e = parseInt(Math.random() * 12);

    const el = `transition`;

    a.setAttribute(
      "style",
      `bottom: ${b}00px; top: ${c}00px; left:${d}; right:${e}00px; `
    );
  }
}
