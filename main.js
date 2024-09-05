let sendmailButton = document.getElementById("sendmail");
if(sendmailButton){
    sendmailButton.onclick = function() {
        let vornameFormular = document.getElementById("vorname");
        let vornameText = "";
        if(vornameFormular) vornameText = vornameFormular.value;

        let nachnameFormular = document.getElementById("nachname");
        let nachnameText = "";
        if(nachnameFormular) nachnameText = nachnameFormular.value;

        let kontaktFormular = document.getElementById("kontaktformular");
        let kontaktText = "";
        if(kontaktFormular) kontaktText = kontaktFormular.value;
        window.open("mailto:raphael_zahner@hotmail.com?subject=Magische Nachricht an die Hexen&body=" 
            + kontaktText + "%0A%0A" + vornameText + " " + nachnameText, "_blank", "noreferrer");
    }    
}

let alterHexengeistElt = document.getElementById("alter_hexengeist");
if(alterHexengeistElt)
    alterHexengeistElt.innerHTML = "" + new Date().getFullYear() - 1651;
