import CardDevice from '../Card/CardDevice';
import { LoadedDevice } from '../../interfaces/interfaces';

const DeviceList = ({ devices }: { devices: LoadedDevice[] }) => {
    return (
        <>
            {devices.map((device) => {
                return (
                    <CardDevice
                        key={device.id}
                        {...device}
                    />
                );
            })}
        </>
    );
};

export default DeviceList;
