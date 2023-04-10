const handleNameButtonClick = (nameInput, color, message, nameDiv, messageInputLabel) => {
    if(nameInput.value === '') {
      alert('Enter your name!');
    } else {
      messageInputLabel.innerHTML = `<span style="color:${color}">${nameInput.value}'s message:</span>`;
      message.style.display = 'block';
      nameDiv.style.display = 'none';
    }
  };
  
  export default handleNameButtonClick;
  