function submitform(){
    console.log("debug");
    debugger;

    const namn =document.forms["guestbook"]["namn"].value;
    const epost = document.forms["guestbook"]["epost"].value;
    const telefon = document.forms["guestbook"]["telefon"].value;
    const meddelande = document.forms["guestbook"]["meddelande"].value;

    const date =date.now();
    console.log(date);
    const today = new date(date);
    console.log(date);

    var message = document.getElementById(message).innerHTMLM;

    message +=`
    ${namn}, (${epost})
    <br>
    ${telefon}
    <br>
    ${meddelande}
    <br>
    ${today.toUTCstring()}
    <hr>
    `;


    return false;
}