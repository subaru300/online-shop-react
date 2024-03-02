import CardDevice from "../Card/CardDevice";
import { LoadedDevice } from "../../interfaces/interfaces";

const DeviceList = ({ devices }: { devices: LoadedDevice[] }) => {

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