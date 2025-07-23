
const timerEl = document.getElementById('timer');
let time = 600;

function updateTimer() {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  timerEl.textContent = `${minutes}:${seconds}`;
  time--;
  if (time < 0) time = 600;
}

setInterval(updateTimer, 1000);

const chatBox = document.getElementById('chat-box');
const messages = [
  "Wow! This is insane!",
  "Am I really joining Squid Game?",
  "What happens next?",
  "Is this real?",
  "Looks like a stream...",
  "Let's goooo!",
  "Hope I win this time.",
  "Anyone from the US here?",
  "This is 🔥🔥🔥",
  "I love Squid Game!"
];

function addChatMessage() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  const div = document.createElement('div');
  div.textContent = msg;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

setInterval(addChatMessage, 1000);
