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

// for scroll
function scrollWithOffset(event, id, offset) {
    event.preventDefault();
    const element = document.getElementById(id);
    const yOffset = -offset;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
    // مدیریت اسکرول و افست پس از بارگذاری صفحه مقصد
    const id = sessionStorage.getItem('scrollId');
    const offset = sessionStorage.getItem('scrollOffset');
    
    if (id && offset) {
        sessionStorage.removeItem('scrollId');
        sessionStorage.removeItem('scrollOffset');
        
        setTimeout(() => {
            const element = document.getElementById(id);
            const yOffset = -offset;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }, 0);
    }

    // مدیریت کلیک بر روی لینک‌ها در صفحه اول
    const navigateLinks = document.querySelectorAll('.navigate');
    navigateLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const id = event.target.getAttribute('data-id');
            const offset = event.target.getAttribute('data-offset');
            sessionStorage.setItem('scrollOffset', offset);
            sessionStorage.setItem('scrollId', id);
            window.location.href = event.target.href;
        });
    });
});

