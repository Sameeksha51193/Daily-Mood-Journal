let currentMood = '';
const quotes = {
  '😊': "Keep smiling, it makes people wonder what you're up to!",
  '😔': "Tough times don't last, tough people do.",
  '😡': "Take a deep breath. You’re stronger than you think.",
  '😴': "Rest is productive too. Recharge and rise!",
  '🤩': "Shine bright, superstar! The world needs your light!"
};

function selectMood(mood) {
  currentMood = mood;
  const quoteText = quotes[mood] || "You're unique. Keep going!";
  document.getElementById('quoteText').innerText = quoteText;
}

function saveEntry() {
  const entryText = document.getElementById('entry').value;
  if (!entryText || !currentMood) {
    alert("Please select a mood and write something!");
    return;
  }

  const entry = {
    mood: currentMood,
    text: entryText,
    date: new Date().toLocaleString()
  };

  const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
  entries.unshift(entry);
  localStorage.setItem('journalEntries', JSON.stringify(entries));

  document.getElementById('entry').value = '';
  renderHistory();
}

function renderHistory() {
  const historyList = document.getElementById('historyList');
  historyList.innerHTML = '';

  const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
  entries.forEach(entry => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${entry.mood}</strong> (${entry.date}): ${entry.text}`;
    historyList.appendChild(li);
  });
}

// Load on page load
window.onload = renderHistory;
