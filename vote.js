function vote() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var country = document.getElementById("country").value;
    var Answer = document.getElementById("Answer");
    if (age >= 18 && country == "India") {
        Answer.innerHTML = name + " is Eligible";
    } else {
        Answer.innerHTML = name + " is Not Eligible";
    }
}