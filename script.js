// Fungsi untuk menampilkan timeline uang
document.getElementById('timeline-button').addEventListener('click', function () {
  const timeline = document.getElementById('timeline');
  timeline.classList.toggle('hidden');
});

// Fungsi untuk menambang blok blockchain
let blockNumber = 0;
document.getElementById('mine-block').addEventListener('click', function () {
  blockNumber++;
  const blockchain = document.getElementById('blockchain');
  const newBlock = document.createElement('div');
  newBlock.className = 'block';
  newBlock.innerText = `Blok #${blockNumber}`;
  blockchain.appendChild(newBlock);
});

// Fungsi untuk kuis Bitcoin
document.getElementById('answer1').addEventListener('click', function () {
  document.getElementById('quiz-result').innerText = 'Benar! Satoshi Nakamoto adalah pencipta Bitcoin.';
});

document.getElementById('answer2').addEventListener('click', function () {
  document.getElementById('quiz-result').innerText = 'Salah! Jawaban yang benar adalah Satoshi Nakamoto.';
});

// Fungsi untuk menampilkan harga Bitcoin real-time
async function fetchBitcoinPrice() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = await response.json();
    const price = data.bitcoin.usd;
    document.getElementById('btc-price').innerText = `$${price}`;
  } catch (error) {
    console.error('Gagal mengambil harga Bitcoin:', error);
  }
}

fetchBitcoinPrice();
setInterval(fetchBitcoinPrice, 60000); // Update setiap 1 menit