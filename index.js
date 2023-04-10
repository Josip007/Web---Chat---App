import { room, drone } from './modules/scaledrone.js';
import handleFormSubmit from './modules/formElement.js';
import handleNameButtonClick from './modules/nameButton.js';
import handleNameInputKeyDown from './modules/nameInput.js';
import { formElement, messageOutputText, nameInput, messageInput, messageInputLabel, nameButton, message, nameDiv } from './modules/domElements.js';

//focus on input as soon as page opens
window.onload = function () {
    nameInput.focus();
}

room.on('message', message => {
    const time = new Date().toLocaleString();
    const timeStyle = 'font-size: 14px';
    const messageText = message.data;
    messageOutputText.innerHTML += `<br><span style="color:${color}; margin: 10px; padding: 7px; border: 1px solid black; line-height: 2; border-radius: 10px; background-color: rgb(211, 88, 233);">${messageText}</span><br>
    <span style="${timeStyle}">${time}</span>`;
    messageOutputText.style.width = '80vw';
    messageOutputText.style.wordBreak = 'break-word';
    messageOutputText.style.padding = '10px';
    setTimeout(() => {
        window.scrollBy(0, 500);
    }, 1);
    messageOutputText.style.border = '1px solid purple';
    messageOutputText.style.borderRadius = '20px';
    messageOutputText.style.backgroundColor = 'rgba(172, 57, 222, 0.8)';
  });
 
const color = 'black';

nameButton.addEventListener('click', () => {
    handleNameButtonClick(nameInput, color, message, nameDiv, messageInputLabel);
  });
  
//pressing enter to submit name input
nameInput.addEventListener('keydown', (e) => {
    handleNameInputKeyDown(e, nameInput, color, message, nameDiv, messageInputLabel, messageInput);
  });
  
//submitting messages
formElement.addEventListener('submit', (event) => {
    handleFormSubmit(event, drone, nameInput, messageInput, color);
  });

//pressing 'i' on the keyboard getting to input field when it is out of focus
document.addEventListener('keydown', (e) => {
    const activeEl = document.activeElement;
    if (activeEl !== messageInput && activeEl !== nameInput && e.key === 'i') {
        e.preventDefault();
        messageInput.focus();
        nameInput.focus();
    }
});
