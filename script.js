function toggleMenu(){
    document.getElementById('navMenu').classList.toggle('show');
}
function validateForm(){
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    if(name === "" || email === "" || message === ""){
        alert("Please fill in all fiels.");
        return false;
    }
    alert("Thank you " + name + "! Your message has been sent to StoryVerse.");
    return false;
}