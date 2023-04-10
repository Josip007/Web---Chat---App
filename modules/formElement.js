const handleFormSubmit = (event, drone, nameInput, messageInput) => {
    event.preventDefault();
    if(messageInput.value === '') {
      alert('Empty message!');
    } else {
      drone.publish({
        room: 'Chat - App',
        message:  `${nameInput.value}: ${messageInput.value}`
      });
      
      messageInput.value = '';
      nameInput.focus();
      setTimeout(() => {
        window.scrollBy(0, 500);
      }, 1000);
    }
  };
  
  export default handleFormSubmit;
  