window.onload = function () {
    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    let openBtn = document.getElementById('openBtn');
    openBtn.onclick = openNav;

    let closeBtn = document.getElementById('closeBtn');
    closeBtn.onclick = closeNav;
};



