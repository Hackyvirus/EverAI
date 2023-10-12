document.addEventListener("DOMContentLoaded", function () {
        let myForm = document.getElementById("myForm");
        myForm.addEventListener("submit", function (e) {
                e.preventDefault();
                let myInput = document.getElementById("myInput");
                let inputValue = myInput.value;
                console.log("You submitted: " + inputValue);
                myInput.value = "";
                document.querySelector(".wellcome").style.display = "none";
                document.querySelector(".cursel").style.display = "none";
                document.querySelector(".profile").style.display = "block";
                document.querySelector(".q").innerHTML = inputValue;
                document.querySelector(".recentchat p").innerText = inputValue;
        });

        document.querySelector("#submitimg").addEventListener("click", (e) => {
                let myForm = document.getElementById("myForm");
                e.preventDefault();
                myForm.submit();
                e.preventDefault();
        });

        const myInput = document.getElementById('myInput');

        myInput.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                        let myForm = document.getElementById("myForm");
                        event.preventDefault();
                        myForm.submit();                 }
        });
});

document.querySelector("#newchat").addEventListener("click", () => {
        let newchat = document.querySelector(".profile");
        newchat.style.display = "none";
        document.querySelector(".wellcome").style.display = "block";
        document.querySelector(".cursel").style.display = "flex";
        document.querySelector()
})

document.querySelector(".recentchatimg5").addEventListener("click", () => {
        document.querySelector(".wellcome").style.display = "block";
        document.querySelector(".cursel").style.display = "flex";
        document.querySelector(".profile").style.display = "none";


})

function firstleftclicked() {
        let leftclick = document.querySelector(".recentchats")
        leftclick.classList.add("recentchats1")
        document.querySelector(".recentchatimg1").style.rotate = "0deg";
        document.querySelector(".recentchatimg1").style.visibility = "hidden"
        document.querySelector(".recentchatimg2").style.visibility = "hidden"
        document.querySelector(".recentchatimg3").style.visibility = "hidden"
        document.querySelector(".recentchatimg4").style.rotate = "180deg"
        document.querySelector(".etc1").style.display = "block"
        document.querySelector(".etc2").style.display = "block"
        document.querySelector(".etc3").style.display = "block"
}

function secondleftclicked() {
        document.querySelector(".recentchats").classList.remove("recentchats1")
        document.querySelector(".etc1").style.display = "none"
        document.querySelector(".etc2").style.display = "none"
        document.querySelector(".etc3").style.display = "none"
        document.querySelector(".recentchatimg1").style.visibility = "visible"
}

document.querySelector(".wellcome").style.display="none"
document.querySelector(".cursel").style.display="none"
document.querySelector(".profile").style.display="block"
