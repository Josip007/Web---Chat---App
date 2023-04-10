const drone = new Scaledrone('28YYwHeJZQFVMpSQ');
drone.on('open', error => {
    console.log('connected');
});
drone.on('error', error => {
    console.error('Error with connection', error);
});
drone.on('close', event => {
    console.log('closed', event);
});
drone.on('disconnect', () => {
    console.log('Disconnected');
});
drone.on('reconnect', () => {
    console.log('reconnected');
});

const room = drone.subscribe('Chat - App');
room.on('open', error => {
    if(error) {
        return console.error(error);
    } else {
        console.log('connected to room');
    }
});

export { room, drone };
