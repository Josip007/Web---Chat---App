const handleNameInputKeyDown = (e, nameInput, color, message, nameDiv, messageInputLabel, messageInput) => {
    if(e.key === 'Enter') {
      e.preventDefault();
      if(nameInput.value === '') {
        alert('Enter your name!');
      } else {
        messageInputLabel.innerHTML = `<span style="color:${color}; background-color: rgb(211, 88, 233); padding:2px; border: 1px solid purple; border-radius: 5px;">${nameInput.value}'s message:</span>`;
        message.style.display = 'block';
        nameDiv.style.display = 'none';
        messageInput.focus();
      }
    }
  };
  
  export default handleNameInputKeyDown;
  