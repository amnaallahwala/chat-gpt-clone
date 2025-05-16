document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const chatWindow = document.getElementById('chat-window');
    const userMessage = document.getElementById('chat-input').value;

    if (userMessage.trim()) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'user-message');
        messageDiv.textContent = userMessage;
        chatWindow.appendChild(messageDiv);

        document.getElementById('chat-input').value = '';
        chatWindow.scrollTop = chatWindow.scrollHeight;

        setTimeout(() => {
            const responseDiv = document.createElement('div');
            responseDiv.classList.add('message', 'system');
            responseDiv.textContent = "ChatGPT: I'm here to help!";
            chatWindow.appendChild(responseDiv);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 500);
    }
}