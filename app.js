function handleEditProfile() {
    document.getElementById("edit-view").style.display = "block"
    document.getElementById("display-view").style.display = "none"
}

function handleUpdateProfile() {
    var updateName = document.getElementById("input-name").value
    var name = document.getElementById("name")
    name.textContent = updateName

    var updateEmail = document.getElementById("input-email").value
    var email = document.getElementById("email")
    if (validator.isEmail('updateEmail')) {
        email.textContent = updateEmail
    }else {
        alert("wrong email format")
    }

    var updateInterests = document.getElementById("input-interests").value
    var interests = document.getElementById("interests")
    interests.textContent = updateInterests

    document.getElementById("edit-view").style.display = "none"
    document.getElementById("display-view").style.display = "block"
}