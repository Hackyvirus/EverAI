document.addEventListener("DOMContentLoaded", function () {
        let myForm = document.getElementById("myForm");

        document.querySelector("#submitimg").addEventListener("click", (e) => {
                let myInput = document.getElementById("myInput");
                let inputValue = myInput.value;
                document.querySelector(".q").innerHTML = inputValue;
                document.querySelector(".recentchat p").innerText = inputValue;
                document.querySelector(".wellcome").style.display = "none";
                document.querySelector(".cursel").style.display = "none";
                document.querySelector(".profile").style.display="block" 
                e.preventDefault();
                myForm.submit();
                myInput.value = "";
        });
        document.querySelector(".English").addEventListener("click", (e) => {
                let myInput = document.getElementById("myForm");
                console.log(myInput)
                myInput.action="kaushik";
                let inputValue = myInput.value;
                document.querySelector(".q").innerHTML = inputValue;
                document.querySelector(".recentchat p").innerText = inputValue;
                document.querySelector(".wellcome").style.display = "none";
                document.querySelector(".cursel").style.display = "none";
                document.querySelector(".profile").style.display="block" 
                e.preventDefault();
                myForm.submit()
                myInput.value = "";
        });
        document.querySelector(".Developer").addEventListener("click", (e) => {
                let myInput = document.getElementById("myInput");
                let inputValue ="Act as Developer " + myInput.value;
                document.querySelector(".q").innerHTML = inputValue;
                document.querySelector(".recentchat p").innerText = inputValue;
                document.querySelector(".wellcome").style.display = "none";
                document.querySelector(".cursel").style.display = "none";
                document.querySelector(".profile").style.display="block" 
                e.preventDefault();
                myForm.submit();
                myInput.value = "";
        });
        document.querySelector(".Teacher").addEventListener("click", (e) => {
                let myInput = document.getElementById("myInput");
                let inputValue ="Act as Teacher " + myInput.value;
                document.querySelector(".q").innerHTML = inputValue;
                document.querySelector(".recentchat p").innerText = inputValue;
                document.querySelector(".wellcome").style.display = "none";
                document.querySelector(".cursel").style.display = "none";
                document.querySelector(".profile").style.display="block" 
                e.preventDefault();
                myForm.submit();
                myInput.value = "";
        });
        document.querySelector(".Student").addEventListener("click", (e) => {
                let myInput = document.getElementById("myInput");
                let inputValue ="Act as Student " + myInput.value;
                document.querySelector(".q").innerHTML = inputValue;
                document.querySelector(".recentchat p").innerText = inputValue;
                document.querySelector(".wellcome").style.display = "none";
                document.querySelector(".cursel").style.display = "none";
                document.querySelector(".profile").style.display="block" 
                e.preventDefault();
                myForm.submit();
                myInput.value = "";
        });
        document.querySelector(".Content").addEventListener("click", (e) => {
                let myInput = document.getElementById("myInput");
                let inputValue ="Act as Content writer " + myInput.value;
                document.querySelector(".q").innerHTML = inputValue;
                document.querySelector(".recentchat p").innerText = inputValue;
                document.querySelector(".wellcome").style.display = "none";
                document.querySelector(".cursel").style.display = "none";
                document.querySelector(".profile").style.display="block" 
                e.preventDefault();
                myForm.submit();
                myInput.value = "";
        });
        document.querySelector(".Doctor").addEventListener("click", (e) => {
                let myInput = document.getElementById("myInput");
                let inputValue ="Act as Doctor " + myInput.value;
                document.querySelector(".q").innerHTML = inputValue;
                document.querySelector(".recentchat p").innerText = inputValue;
                document.querySelector(".wellcome").style.display = "none";
                document.querySelector(".cursel").style.display = "none";
                document.querySelector(".profile").style.display="block" 
                e.preventDefault();
                myForm.submit();
                myInput.value = "";
        });
        document.querySelector(".Engineer").addEventListener("click", (e) => {
                let myInput = document.getElementById("myInput");
                let inputValue ="Act as Engineer " + myInput.value;
                document.querySelector(".q").innerHTML = inputValue;
                document.querySelector(".recentchat p").innerText = inputValue;
                document.querySelector(".wellcome").style.display = "none";
                document.querySelector(".cursel").style.display = "none";
                document.querySelector(".profile").style.display="block" 
                e.preventDefault();
                myForm.submit();
                myInput.value = "";
        });

        const myInput = document.getElementById('myInput');

        myInput.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                        let myForm = document.getElementById("myForm");
                        let myInput = document.getElementById("myInput");
                        let inputValue = myInput.value;
                        document.querySelector(".q").innerHTML = inputValue;
                        document.querySelector(".recentchat p").innerText = inputValue;
                        document.querySelector(".wellcome").style.display = "none";
                        document.querySelector(".cursel").style.display = "none";
                        document.querySelector(".profile").style.display="block" 
                        e.preventDefault();
                        myForm.submit();
                        myInput.value = "";
                }
        });
});

document.querySelector("#newchat").addEventListener("click", () => {
        let newchat = document.querySelector(".profile");
        newchat.style.display = "none";
        document.querySelector(".wellcome").style.display = "block";
        document.querySelector(".cursel").style.display = "flex";
})

document.querySelector(".recentchatimg5").addEventListener("click", () => {
        document.querySelector(".wellcome").style.display = "block";
        document.querySelector(".cursel").style.display = "flex";
        document.querySelector(".profile").style.display = "none";


})




