function validateEmail() {
            var email = document.getElementById("email").value;
            var message = document.getElementById("message");
            var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;  

            if (email.match(pattern)) {
                document.getElementById("email").style.borderColor = "green";
                message.innerHTML = "Почта введена верно";
                message.classList.remove("error");
                message.classList.add("success");
                setTimeout(function(){ window.location.href = "subs.html"; }, 2000);
            } else {
                document.getElementById("email").style.borderColor = "red";
                message.innerHTML = "Почта введена неверно";
                message.classList.remove("success");
                message.classList.add("error");
            }
        }