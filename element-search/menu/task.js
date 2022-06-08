const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(link => {
  const parentMenu = link.closest(".menu_main");
  const parentSubMenus = parentMenu.querySelectorAll(".menu_sub");
  link.onclick = () => {
    parentSubMenus.forEach(subMenu => {
      subMenu.classList.remove("menu_active");
    });
    const linkParent = link.parentElement;
    const linkSubMenu = linkParent.querySelector(".menu_sub");
    linkSubMenu.classList.add("menu_active");
    return false;
  }
});
