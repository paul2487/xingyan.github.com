document.getElementById("serverip").addEventListener("click", copyip);
document.getElementById("serverip").addEventListener("mouseover", showcopy);
document.getElementById("serverip").addEventListener("mouseleave", showip);


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


function showcopy(){
    document.getElementById("serverip").innerText = "Click to Copy";
}

function showip(){
    document.getElementById("serverip").innerText = "SMP.XINGYAN.TK";
}