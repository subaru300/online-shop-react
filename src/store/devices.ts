import { Device } from "../interfaces/interfaces";

const devices = [
    {
        name: 'Apple iPhone 15 Pro',
        imageLink: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg',
        description: ['iOS 17','Apple A17 Pro', 'Super Retina XDR OLED, 120Hz'],
        price: 899,
        id: '1',
        quantity: 1,
    },
    {
        name: 'Apple iPhone 14 Pro',
        imageLink: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-3.jpg',
        description: ['iOS 16','Apple A16 Bionic', 'Super Retina XDR OLED, 120Hz'],
        price: 689,
        id: '2',
        quantity: 1,
    },
    {
        name: 'Apple iPhone 13 Pro',
        imageLink: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-01.jpg',
        description: ['iOS 15','Apple A15 Bionic', 'Super Retina XDR OLED, 120Hz'],
        price: 469,
        id: '3',
        quantity: 1,
        },
                {
                    name: 'Samsung Galaxy S24 Ultra',
                    imageLink: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-0.jpg',
                    description: ['Android 14, One UI 6.1','Qualcomm SM8650-AC Snapdragon 8 Gen 3', 'LTPO AMOLED 2X, 120Hz'],
                    price: 1260,
                    id: '10',
                    quantity: 1,
                    },
                    {
                        name: 'Xiaomi Redmi Note 13 Pro 4G',
                        imageLink: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-pro-4g-1.jpg',
                        description: ['Android 13, MIUI 14','Mediatek Helio G99 Ultra', 'AMOLED, 1B colors, 120Hz'],
                        price: 309,
                        id: '11',
                        quantity: 1,
                        },
];

export const devicesFetch = () : Promise<Device[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(devices), 500);
    })
};


