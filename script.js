const timerEl = document.getElementById("timer");
let timeLeft = 30;

const interval = setInterval(() => {
  timeLeft--;
  timerEl.textContent = `00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
  if (timeLeft <= 0) {
    clearInterval(interval);
  }
}, 1000);

const chatBox = document.getElementById("chat-box");
const chatMessages = [
  "just joined 🔥",
  "can't wait!",
  "this game is crazy",
  "I’m in 😈",
  "is this real??",
  "finally got in",
  "last spot omg",
  "wish me luck 🍀",
  "LET'S GOOO",
  "this is insane"
];

setInterval(() => {
  const msg = chatMessages[Math.floor(Math.random() * chatMessages.length)];
  const p = document.createElement("p");
  p.textContent = `👤 ${msg}`;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
  if (chatBox.childNodes.length > 15) {
    chatBox.removeChild(chatBox.firstChild);
  }
}, 1000);
