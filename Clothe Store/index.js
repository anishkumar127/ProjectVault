function showData() {
  const element = document.querySelector("#onHide");
  element.classList.toggle("show");
}

const toggle = () => {
  let el = document.getElementById("hideMenu");

  // if(el.style.display==='none'){
  //     el.style.display="block"
  // }else{
  //     el.style.display="none";
  // }

  el.classList.toggle("visible-nav-sidebar");
  console.log("clicked");
};
