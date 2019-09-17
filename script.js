const toggle = document.getElementById('toggle')
const btnClose = document.getElementById('btn-close')
const sideNavbar = document.getElementById('side-navbar')

toggle.onclick = function () {
    sideNavbar.style.width = "250px";
}

btnClose.onclick = function () {
    sideNavbar.style.width = "0";
}

