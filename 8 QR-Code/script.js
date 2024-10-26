let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");


function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
    
}

function downloadQR() {
    if (qrImage.src) {  // Check if a QR code is generated
        const link = document.createElement('a');
        link.href = qrImage.src;
        link.download = 'qr-code.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert("Please generate a QR code first.");
    }
}