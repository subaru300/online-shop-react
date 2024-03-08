import { useContext, useEffect, useState } from "react";
import { Box, Divider, useToast } from "@chakra-ui/react";
import { CartContext } from "../cart/CartContext";
import SpinnerComp from "../Spinner/SpinnerComp";
import DeviceList from "../DeviceList/DeviceList";
import SideFilter from "../SideFilter/SideFilter";
import { LoadedDevice } from "../../interfaces/interfaces"; 
import fetchData from "../../api/fetchData";
import styles from './Main.module.css';

const Main = () => {
    const [loadedDevices, setLoadedDevices] = useState<LoadedDevice[]>([]);
    const [filteredByCategory, setFilteredByCategory] = useState<LoadedDevice[]>([]);
    const [filteredByModel, setFilteredByModel] = useState<LoadedDevice[]>([]);
    const [finalDevices, setFinalDevices] = useState<LoadedDevice[]>([]);

    const [chosenCategory, setChosenCategory] = useState<string>('All');
    const [chosenModel, setChosenModel] = useState<string[]>([]);
    const { cartItems } = useContext(CartContext);
    const toast = useToast();
    

    useEffect(() => {
        const loadData = async () => {
            try {
                const devicesData = await fetchData();
                setLoadedDevices(devicesData);
                filterByCategory('All', devicesData);
            } catch (error) {
                console.error(error);
            }
        };
        loadData();
    }, []);

    useEffect(() => {
        if(filteredByModel.length === 0) {
            setFinalDevices(filteredByCategory)
        } else {
            setFinalDevices(filteredByModel);
        }
    }, [filteredByCategory, filteredByModel, chosenModel])

    const filterByCategory = (category = 'All', devices: LoadedDevice[]) => {
        if(category  === 'All') {
            // setFilteredByCategory(devices);
           
            setFinalDevices(devices);
        } else {
         
            // setChosenModel([]);
            const filteredDevices = devices.filter((device) => device.name.split(' ')[1] === category.split(' ')[1]);
            
            setFilteredByCategory(filteredDevices);
        }
    };

    const filterByModel = (name: string[], devices: LoadedDevice[]) => {
        if(name.length === 0) {
            setFilteredByModel([]);
        } else {
            const filteredDevices = devices.filter((device) => name.includes(device.name));
            setFilteredByModel(filteredDevices);
        }
    };

    const onModelChangeHandler = (selectedModels: string[]) => {
        setChosenModel(selectedModels);
        filterByModel(selectedModels, filteredByCategory);
    };

    useEffect(() => {
        if (cartItems.length === 0) return;
        toast({
            title: `Your Cart was changed`,
            status: 'info',
            duration: 1000,
            isClosable: true,
          })
    }, [cartItems])

    return (
        <Box className={styles.container}>
            <Box className={styles.menu}>
                <SideFilter 
                    onChoseCategory={setChosenCategory} 
                    chosenCategory={chosenCategory}
                    loadedDevices={loadedDevices}
                    filteredByCategory={filteredByCategory}
                    filterByCategory={filterByCategory}
                    onModelChangeHandler={onModelChangeHandler}/>
            </Box>
            <Divider orientation="vertical"/>

            {finalDevices.length === 0
                ?   <Box className={styles.page}>
                        <SpinnerComp/>
                    </Box> 
                :   <Box className={styles.page}>
                        <DeviceList devices={finalDevices}/>
                    </Box>}
         
        </Box>
    )
};

export default Main;