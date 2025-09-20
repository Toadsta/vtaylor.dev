const timeDiv = document.getElementById('time');

setInterval(function() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    timeDiv.textContent = hh + ':' + mm;
}, 1000);