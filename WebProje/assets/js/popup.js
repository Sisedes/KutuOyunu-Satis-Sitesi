document.addEventListener("DOMContentLoaded", function () {
    // Sayfa yüklendiğinde popup'ı gizle
    document.getElementById("popup").style.display = "none";

    // JavaScript functions to open and close the popup
    function openPopup() {
        document.getElementById("popup").style.display = "block";
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }

    // A elementine tıklanınca popup'ı aç
    document.getElementById("openPopup").addEventListener("click", openPopup);

    // Kapatma butonuna tıklanınca popup'ı kapat
    document.getElementById("closePopup").addEventListener("click", closePopup);
});
