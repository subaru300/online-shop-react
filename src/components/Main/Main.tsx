import { useContext, useEffect, useState } from "react";
import { Box, Divider, useToast } from "@chakra-ui/react";
import { Device } from "../../interfaces/interfaces";
import { devicesFetch } from "../../store/devices";
import { CartContext } from "../cart/CartContext";
import SpinnerComp from "../Spinner/SpinnerComp";
import DeviceList from "../DeviceList/DeviceList";
import SideFilter from "../SideFilter/SideFilter";
import styles from './Main.module.css';

const Main = () => {
    const [devices, setDevices] = useState<Device[]>([]);
    const [chosenBrand, setChosenBrand] = useState<string>('Apple');
    const { cartItems } = useContext(CartContext);
    const toast = useToast();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const devicesData = await devicesFetch();
                const filteredDevices = devicesData.filter((device) => device.name.split(' ')[0] === chosenBrand)
                setDevices(filteredDevices);
                
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [chosenBrand]);

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
            {devices.length === 0
                ?   <Box className={styles.page}>
                        <SpinnerComp/>
                    </Box> 
                :   <Box className={styles.page}>
                        <DeviceList devices={devices}/>
                    </Box>}
        </Box>
    )
};

export default Main;