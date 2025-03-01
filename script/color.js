
document.addEventListener("DOMContentLoaded", function() {
    const colors = ["#0000FF", "#FFFF00", "#FF00FF", "#ADFF2F"]; 
    let index = 0; 

    document.getElementById("color-btn").addEventListener("click", function() {
        document.body.style.backgroundColor = colors[index]; 
        index = (index + 1) % colors.length;
    });
});
