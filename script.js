// Oyuncu bakiyelerini yükle
let balances = JSON.parse(localStorage.getItem("balances")) || [15000000, 15000000, 15000000, 15000000];

// Şu an girilen değer
let inputAmount = 0;
let multiplier = 1;

// Arayüzü güncelle
function updateUI() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`balance${i}`).innerText = balances[i - 1].toLocaleString();
    }
    document.getElementById("amountInput").value = inputAmount.toLocaleString();
}

// Rakam ekleme
function addNumber(num) {
    inputAmount = inputAmount * 10 + num;
    updateUI();
}

// K ve M tuşlarını ayarla
function setMultiplier(value) {
    inputAmount *= value;
    updateUI();
}

// Bakiyeyi güncelleme fonksiyonu
function updateBalance(type) {
    let playerIndex = document.getElementById("playerSelect").value - 1;

    if (type === "+") {
        balances[playerIndex] += inputAmount;
    } else if (type === "-") {
        balances[playerIndex] -= inputAmount;
    }

    localStorage.setItem("balances", JSON.stringify(balances)); // Kaydet
    inputAmount = 0; // Girişi sıfırla
    updateUI();
}

// Sayfa yüklendiğinde UI’yi güncelle
updateUI();
