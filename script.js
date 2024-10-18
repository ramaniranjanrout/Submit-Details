function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message"); 

    if (name === "" || email === "" || phone === "") {
        message.innerHTML = "<p class='error'>All fields are required!</p>";
    } else {
        message.innerHTML = "<p class='success'>Form submitted successfully!</p>";
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("phone").value="";
    }
}  