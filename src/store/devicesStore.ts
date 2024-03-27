import { action, makeObservable, observable, runInAction } from "mobx";
import { LoadedDevice } from "../interfaces/interfaces";
import fetchData from "../api/fetchData";

class devicesStore {
    constructor() {
        makeObservable(this, {
            loadedDevices: observable,
            isLoading: observable,
            error: observable,
            loadDevices: action,
            saveError: action,
        })
    }


    loadedDevices: LoadedDevice[] = [];
    isLoading: boolean = false;
    error: string | null = null;
    

    loadDevices = async () => {
        this.isLoading = true;
        try {
            const devices = await fetchData();
            runInAction(() => {
                this.loadedDevices = devices;
            })
        } catch (error) {
            console.error('Error loading devices:', error)
        } finally {
            runInAction(() => {
                this.isLoading = false;
            })
        }
    };

    saveError = (message: string) => {
        this.error = message;
    }
}

export default devicesStore;