const number = document.getElementById("notification_Number");
const notification = document.querySelectorAll(".notification");
const redDot = document.querySelectorAll(".red_point");

number.textContent = 3;


function markAsRead() {
    number.textContent = 0;

    notification.forEach(notif => {
        notif.style.backgroundColor = "white";
    });

    redDot.forEach(dot => {
        dot.style.display = "none";
    })  
}