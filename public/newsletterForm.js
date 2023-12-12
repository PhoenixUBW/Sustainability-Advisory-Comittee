var submit = document.getElementById('submit-main');
var signedUp = false;

function processSubmit(e){
    e.preventDefault();
    function onTextReady(text){
        let newLine = document.createElement('p');
        let currentLine = document.getElementById('test-response-main');
        newLine.textContent = text;
        currentLine.append(newLine);
        console.log(text);
    }
    
    function onResponse(response){
        return response.text();
    }

    const formFirstName = document.getElementById('first-name-main').value;
    const formSurname = document.getElementById('surname-main').value;
    const formEmail = document.getElementById('email-main').value;
    const formComments = document.getElementById('comments-main').value;
    if (signedUp == false){
        if (formFirstName && formSurname && formEmail && formComments != null) {
            console.log('formFirstName:', formFirstName);
            console.log('formSurname:', formSurname);
            console.log('formEmail:', formEmail);
            console.log('formComments:', formComments);

            const fullMessage = {
                firstName: formFirstName,
                surname: formSurname,
                email: formEmail,
                comments: formComments
            };
            
            const serializedMessage = JSON.stringify(fullMessage);
            
            const fetchOptions ={
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: serializedMessage
            }
            
            fetch('http://localhost:3000/newsletterForm', fetchOptions)
            .then(onResponse)
            .then(onTextReady);
            signedUp = true;
        }
    }
}

submit.addEventListener('click', processSubmit);



