import { Device } from "../../interfaces/interfaces";
import CardDevice from "../Card/CardDevice";

const DeviceList = ({ devices }: { devices: Device[] }) => {

    return ( <>
        {devices.map((device) => {
            return (
                <CardDevice 
                key={device.id}
                id={device.id}
                name={device.name}
                imageLink={device.imageLink}
                description={device.description}
                price={device.price}
                quantity={device.quantity}/> 
            )
        })}
        </>
    )
};

export default DeviceList;