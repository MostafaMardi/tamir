document.getElementById("burger").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
});

document.querySelectorAll("#menu .menu_list").forEach(function(menuItem) {
    menuItem.addEventListener("click", function() {
        var menu = document.getElementById("menu");
        menu.classList.remove("show");
    });
});
