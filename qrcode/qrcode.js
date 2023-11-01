// *********************** Genertae qrcode **************************************

const input = document.querySelector("input");
const qrImage = document.querySelector("img");
const generateBtn = document.querySelector("#generate");
const downloadBtn = document.querySelector("#download");

// ************************* Process to conect Api ********************************
generateBtn.addEventListener("click" , () => {
    const qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`;
    qrImage.src = qrcode;
})

// ************************ Process to Download ***********************************
downloadBtn.addEventListener("click" , async () => {
    const response = await fetch( qrImage.src );
    const blob = await response.blob();
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL( blob );
    downloadLink.download = "qrcode.jpg";
    downloadLink.click();
})