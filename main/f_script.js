let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});
searchBtn.addEventListener("click", () => {
  // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});
// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
  }
}
elementById.addEventListener("click",function(){})

function sendMessage() {
  var messageInput = document.getElementById('message-input');
  var messageText = messageInput.value;

  if (messageText.trim() !== '') {
      var chatMessages = document.getElementById('chat-messages');
      var newMessage = document.createElement('div');
      newMessage.className = 'message';
      newMessage.textContent = messageText;

      chatMessages.appendChild(newMessage);

      // Clear the input field after sending the message
      messageInput.value = '';

      // Optionally, you can scroll the chat to the bottom to show the latest messages
      chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}