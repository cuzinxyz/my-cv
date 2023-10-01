const downloadPDF = ()=> {
    const link=document.createElement('a');
    const filePath = './assets/files/CV-DoHuuNhat.pdf'
    link.href = filePath;
    link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
    link.click();
}

const button = document.getElementById('download_pdf')
button.onclick = downloadPDF