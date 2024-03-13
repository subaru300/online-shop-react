import { LoadedDevice } from '../interfaces/interfaces';

const fetchData = async (): Promise<LoadedDevice[]> => {
    try {
        const response = await fetch('https://deviceshopdemo-default-rtdb.firebaseio.com/devices.json');

        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        const data = await response.json();

        const loadedDevices: LoadedDevice[] = [];
        for (const key in data) {
            loadedDevices.push({
                name: data[key].name,
                imageLink: data[key].imageLink,
                description: data[key].description,
                price: data[key].price,
                id: key,
                quantity: data[key].quantity,
            });
        }
        return loadedDevices;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default fetchData;