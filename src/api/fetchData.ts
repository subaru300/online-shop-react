import { LoadedDevice } from '../interfaces/interfaces';
import { loadedDevicesStore } from '../store';

const fetchData = async (): Promise<LoadedDevice[]> => {
    try {
        const response = await fetch('https://deviceshopdemo-default-rtdb.firebaseio.com/devices.json');

        if (!response.ok) {
            throw new Error('Something went wrong, please reload page');
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
                display: data[key].display,
                cpu: data[key].cpu,
                ram: data[key].ram,
                rom: data[key].rom,
            });
        }
        return loadedDevices;
    } catch (error) {
        console.error(error);
        const errorMessage = (error as Error).message
        loadedDevicesStore.saveError(errorMessage)
        return [];
    }
};

export default fetchData;