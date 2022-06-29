const menu = document.getElementById("menu-icon"),
    disp = document.getElementById('nav')

menu.addEventListener("click", () => {
  if (menu.classList.contains("bx-menu")) {
    menu.classList.remove("bx-menu");
    menu.classList.add("bx-x");
    disp.style.display = 'flex';
  } else {
    menu.classList.remove("bx-x");
    menu.classList.add("bx-menu");
    disp.style.display = 'none'
  }
});

const activeLink = document.querySelectorAll('.list-item');

function colorList()
{
    activeLink.forEach(l => l.classList.remove('active-link'));
    this.classList.add('active-link');
}

activeLink.forEach(l => l.addEventListener('click', colorList))

const active = document.querySelectorAll('.item');

function colorList1()
{
    active.forEach(e => e.classList.remove('active'));
    this.classList.add('active');
}

active.forEach(e => e.addEventListener('click', colorList1))

