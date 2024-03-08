import { Card, Checkbox } from '@chakra-ui/react';
import { LoadedDevice } from '../../interfaces/interfaces';
import { useEffect } from 'react';
import styles from './FilterByModel.module.css';

interface Props {
    filteredByCategory: LoadedDevice[];
    onModelChangeHandler: (selectedModels: string[]) => void;
    selectedModels: string[];
    setSelectedModels: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterByModel = ({ filteredByCategory, onModelChangeHandler, selectedModels, setSelectedModels }: Props) => {

    const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, deviceName: string) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setSelectedModels(prev => [...prev, deviceName]);
        } else {
            setSelectedModels(prev => prev.filter(name => name !== deviceName));
        }
       
    };

    useEffect(() => {
        onModelChangeHandler(selectedModels);
    }, [selectedModels]);
    

    return <div>
        <h4 className={styles.header}>Model</h4>
        <Card className={styles.filterCard}>
            <div className={styles.wrapper}>
        {filteredByCategory.map((device) => {
            return <Checkbox 
                        key={device.name}
                        colorScheme='orange'
                        isChecked={selectedModels.includes(device.name)}
                        onChange={(e) => checkboxChangeHandler(e, device.name)
                        }><span className={styles.checkbox}>{device.name}</span></Checkbox>
        })}
            </div>
        </Card>
    </div>
}; 

export default FilterByModel;