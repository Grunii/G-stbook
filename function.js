function submitform(){
    console.log("debug");
    debugger;

    const namn =document.forms["guestbook"]["namn"].value;
    const epost = document.forms["guestbook"]["epost"].value;
    const telefon = document.forms["guestbook"]["telefon"].value;
    const meddelande = document.forms["guestbook"]["meddelande"].value;
    return false;
}