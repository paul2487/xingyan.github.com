



document.getElementById("serverip").addEventListener("click", copyip);


function copyip() {
    /* Get the text field */
    /* Copy the text inside the text field */
    navigator.clipboard.writeText("smp.xingyan.tk").then(r => console.log(r));

    /* Alert the copied text */
    swal({
        title: "Copied!",
        icon: "success",
    }).then(r => console.log(r));
}