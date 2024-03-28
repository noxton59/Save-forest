const menuLink = document.querySelectorAll(".menu-link");
menuLink.forEach(item=>{
  item.addEventListener('click', ()=>{
    const navBarCollapse = document.querySelector(".navbar-collapse");
    navBarCollapse.classList.remove("show");
  })
})