import CardDevice from '../Card/CardDevice';
import { LoadedDevice } from '../../interfaces/interfaces';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';

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
              <ScrollToTopButton />
        </>
    );
};

export default DeviceList;
