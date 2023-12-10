const submit = document.getElementById('submit');

function saveFormToJson() {
    const form = document.getElementById('myForm');

    const formData = {
        firstName : document.getElementById('first-name').value,
        lastName : document.getElementById('surname').value,
        email : document.getElementById('email').value,
        comments : document.getElementById('comments').value
    };

    // Convert the object to JSON
    var jsonData = JSON.stringify(formData);

    // Use the Fetch API to send data to the server
    fetch('your_server_endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Type': 'application/json',
        },
        body: jsonData,
    })
    .then(response => response.json())
    .then(data => {
        // Handle the server response if needed
        console.log('Server response:', data);
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
    });
}

submit.addEventListener('click', processSubmit);