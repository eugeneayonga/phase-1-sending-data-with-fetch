function submitData (userName, userEmail) {
    
    const user = {
        name: userName,
        email: userEmail
    }

    const configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(user),
    };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.body.innerHTML += `<p>${data.id}</p>`;
    })
    .catch(error => {
        console.log(error);
        document.body.innerHTML += `<p>${error.message}</p>`;
    });
}
