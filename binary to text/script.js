function convertToText() {
    const binaryInput = document.getElementById("binaryInput").value.trim();
    const binaryArray = binaryInput.split(' ');

    // Regex untuk memeriksa apakah input valid biner
    const binaryRegex = /^[01]+$/;
    
    let textOutput = '';

    for (let i = 0; i < binaryArray.length; i++) {
        const binaryChar = binaryArray[i];
        
        // Cek jika setiap bagian adalah biner yang valid
        if (!binaryRegex.test(binaryChar) || binaryChar.length !== 8) {
            textOutput = 'ini buka kode binary';
            break;
        }
        
        const asciiCode = parseInt(binaryChar, 2);
        if (!isNaN(asciiCode)) {
            textOutput += String.fromCharCode(asciiCode);
        }
    }

    if (textOutput === '') {
        textOutput = 'Please enter some binary code.';
    }

    document.getElementById("textOutput").value = textOutput;
}
