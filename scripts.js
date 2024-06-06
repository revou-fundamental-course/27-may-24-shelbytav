// ini Java Script

// Function untuk replace nama
function replaceName(){
let name = prompt("Siapa nama Anda?" );
document.getElementById("name").innerHTML=name
}





// document.getElementById("ubah").addEventListener("click",function(){ 
//     replaceName();
// })

document.getElementById("formulir").addEventListener("submit",function(event) { 
    event.preventDefault(); //Mencegah pengiriman formulir Default


    // membuat tanggal sekarang
    const now = new Date();
    const datetimestring= now.toLocaleString();


    // Ambil nilai dari formulir

    const name = document.getElementById('name-input').value;
    const date = document.getElementById('birthdate').value;
    const jeniskelamin = document.querySelector('input{name="jenis-kelamin"}:checked').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Buat teks hasil inputan
    const resultText = date/time ${dateTimeString}\n \nna; ${nama}\nbirthdate: ${birthdate}\r

    // Tampilkan hasil inputan di text area
    document.getElementById('result').value = resultText;

    // Tampilkan pesan alert I
    alert('Pesan telah tersubmit');
    document.getElementById("name").value ="";
    document.getElementById("birthdate").value ="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";

});