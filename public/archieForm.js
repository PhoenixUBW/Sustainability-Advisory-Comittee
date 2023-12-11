function saveFormToJson() {
    const formData = {
        firstName : document.getElementById("first-name-main").value,
        lastName : document.getElementById("surname-main").value,
        email : document.getElementById("email-main").value,
        comments : document.getElementById("comments-main").value
    };

    var jsonData = JSON.stringify(formData);

    fetch("/newsletter", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: jsonData,
    })
    .then(response => response.json())
    .then(data => {
        console.log("Server response:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const formContainer = document.querySelector("#form-container-main");

    formContainer.addEventListener("click", function (event) {
        const target = event.target;

        if (target.id === "submit-main") {
            event.preventDefault();
            saveFormToJson();
        }
    });
})