function submitform(){
    console.log("debug");
    debugger;

    const namn =document.forms["guestbook"]["namn"].value;
    const epost = document.forms["guestbook"]["epost"].value;
    const telefon = document.forms["guestbook"]["telefon"].value;
    const meddelande = document.forms["guestbook"]["meddelande"].value;

    const date =Date.now();
    console.log(date);
    const today = new Date(date);
    console.log(today);

    var message = document.getElementById("message").innerHTML;

    message += `
    ${namn}, (${epost})
    <br>
    ${telefon}
    <br>
    ${meddelande}
    <br>
    ${today.toUTCString()}
    <hr>
    `;
   var message = document.getElementById("message").innerHTML = message;

    return false;
}