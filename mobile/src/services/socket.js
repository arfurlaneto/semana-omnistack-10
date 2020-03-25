import socketio from 'socket.io-client';
import config from './config';

const socket = socketio(config.baseURL, {
    autoConnect: false
});

function subscribeToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    };

    socket.connect();

    socket.on('message', text => console.log(text));
}

function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

export { connect, disconnect, subscribeToNewDevs };
