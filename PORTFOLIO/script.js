document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".btn.active").addEventListener("click", function(event) {
        event.preventDefault(); 
        var cvUrl = "https://drive.google.com/file/d/1OzXbPJI3OXbXe1H3XUOBxYjcguoxj6ct/view?usp=drive_link";
        window.open(cvUrl, "_blank");
    });

    document.querySelector(".fa-instagram").addEventListener("click", function(event) {
        event.preventDefault(); 
        var instagramUrl = "https://www.instagram.com/mohammed_farhan_24/?next=%2F&hl=en";
        window.open(instagramUrl, "_blank"); 
    });

    document.querySelector(".fa-linkedin").addEventListener("click", function(event) {
        event.preventDefault();
        var linkedinUrl = "https://www.linkedin.com/in/mohammed-farhan-1a0169271/";
        window.open(linkedinUrl, "_blank"); 
    });

    document.querySelector(".fa-facebook").addEventListener("click", function(event) {
        event.preventDefault(); 
        var facebookUrl = "https://www.facebook.com/profile.php?viewas=100000686899395&id=100005327807154";
        window.open(facebookUrl, "_blank"); 
    });

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
        var formData = new FormData(this);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", ".");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    document.getElementById("statusMessage").innerHTML = "Thank you! Your message has been sent.";
                    document.getElementById("contactForm").reset(); // Reset the form
                } else {
                    document.getElementById("statusMessage").innerHTML = "Oops! Something went wrong. Please try again later.";
                }
            }
        };
        xhr.send(new URLSearchParams(formData).toString());
    });


    document.querySelectorAll(".btn").forEach(function(button) {
        if (button.textContent.trim() === "Contact") {
            button.addEventListener("click", function(event) {
                event.preventDefault();
                document.querySelector(".contact-form").scrollIntoView({ behavior: 'smooth' });
            });
        }
    });
});

