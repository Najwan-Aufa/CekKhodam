function cekKhodam() {
    const nameInput = document.getElementById('nameInput').value;
    if (!nameInput) {
        Swal.fire({
            title: 'jangan kosong',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
        const khodams = [
            { name: "Harimau Putih", meaning: "kamu kuat bisa melawan raja arco" },
            { name: "banteng biru", meaning: "Selalu kuat dan tahan lama" },
            { name: "Harimau hitam", meaning: "kamu selalu di temanin bayangan hitam" },
            { name: "Harimau ungu", meaning: "mengawasi dari jauh sambil makan bakso" },
            { name: "Honda Beat", meaning: "Selalu lincah di jalanan" },
            { name: "Harimau petir", meaning: "membuat kebal bacok" },
            { name: "Harimau pink", meaning: "selalu ada tapi tak di angap seperti badut" },
            { name: "macan madura", meaning: "selalu membuat bersemangat dan gembira" },
            { name: "Sepeda BMX", meaning: "Selalu siap untuk petualangan" },
            { name: "macan boge", meaning: "membuat jago main ff" },
            { name: "elang merah", meaning: "Selalu tangguh di segala medan" },
            { name: "macan Arco", meaning: "membuat kuat dan perkasa" },
            { name: "macan putih", meaning: "kulit terlihat putih dan mengkilat" },
            { name: "banteng merah", meaning: "Selalu menang di segala medan" },
            { name: "Sepatu Roda", meaning: "Kamu cepat dan lincah, selalu bergerak ke depan dengan penuh gaya." },
            { name: "Kuda Emas", meaning: "Kamu berharga dan kuat, siap untuk berlari menuju kesuksesan." },
            { name: "Lem Super", meaning: "Selalu lengket dalam situasi yang rumit" },
            { name: "Es Kelapa", meaning: "Selalu segar dan menyegarkan" },
            { name: "Naga biru", meaning: "Selalu segar dan kuat" },
            { name: "Kompor Gas", meaning: "Selalu cepat dan panas" },
        ];
        const khodam = khodams[Math.floor(Math.random() * khodams.length)];
        document.getElementById('khodamName').innerText = `Kodam: ${khodam.name}`;
        document.getElementById('khodamMeaning').innerText = khodam.meaning;
        document.getElementById('result').style.display = 'block';
        document.getElementById('loading').style.display = 'none'; 
    }, 800); 
}

function resetForm() {
    document.getElementById('nameInput').value = '';
    document.getElementById('result').style.display = 'none';
}