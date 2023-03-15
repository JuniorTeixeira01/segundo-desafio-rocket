const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {

    e.preventDefault();

    const email = document.querySelector("#email")

    const value = email.value;

    console.log(value);
});