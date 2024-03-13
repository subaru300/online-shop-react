import { UserData } from '../interfaces/interfaces';

const sendData = async (userData: UserData) => (
    await fetch('https://deviceshopdemo-default-rtdb.firebaseio.com/orders.json', {
        method: 'POST',
        body: JSON.stringify({
            data: userData,
        }),
    })
);

export default sendData;