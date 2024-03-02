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
    const [chosenBrand, setChosenBrand] = useState<string>('All');
    const { cartItems } = useContext(CartContext);
    const toast = useToast();
    
    useEffect(() => {
        const loadData = async () => {
            const devicesData = await fetchData();
            setLoadedDevices(devicesData);
        }
        loadData();
    }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const devicesData = await devicesFetch();
    //             if (chosenBrand === 'All') {
    //                 setDevices(devicesData);
    //             } else {
    //                 const filteredDevices = devicesData.filter((device) => device.name.split(' ')[0] === chosenBrand)
    //                 setDevices(filteredDevices);
    //             }
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchData();
    // }, [chosenBrand]);

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
                <SideFilter onChoseBrand={setChosenBrand}/>
            </Box>
            <Divider orientation="vertical"/>
            {loadedDevices.length === 0
                ?   <Box className={styles.page}>
                        <SpinnerComp/>
                    </Box> 
                :   <Box className={styles.page}>
                        <DeviceList devices={loadedDevices}/>
                    </Box>}
        </Box>
    )
};

export default Main;