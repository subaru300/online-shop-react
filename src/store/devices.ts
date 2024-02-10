import { Device } from "../interfaces/interfaces";

const devices = [
    {
        name: 'Apple iPhone 15 Pro',
        imageLink: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg',
        description: 'Released 2023, September 22',
        price: 899,
        id: '1',
        quantity: 1,
    },
    {
        name: 'Apple iPhone 14 Pro',
        imageLink: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-3.jpg',
        description: 'Released 2022, September 16',
        price: 689,
        id: '2',
        quantity: 1,
    },
    {
        name: 'Apple iPhone 13 Pro',
        imageLink: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-01.jpg',
        description: 'Released 2021, September 24',
        price: 469,
        id: '3',
        quantity: 1,
        },
        {
            name: 'Apple iPhone 15 Pro',
            imageLink: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg',
            description: 'Released 2023, September 22',
            price: 899,
            id: '4',
            quantity: 1,
        },
        {
            name: 'Apple iPhone 14 Pro',
            imageLink: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-3.jpg',
            description: 'Released 2022, September 16',
            price: 689,
            id: '5',
            quantity: 1,
        },
        {
            name: 'Apple iPhone 13 Pro',
            imageLink: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-01.jpg',
            description: 'Released 2021, September 24',
            price: 469,
            id: '6',
            quantity: 1,
            },
            {
                name: 'Apple iPhone 15 Pro',
                imageLink: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg',
                description: 'Released 2023, September 22',
                price: 899,
                id: '7',
                quantity: 1,
            },
            {
                name: 'Apple iPhone 14 Pro',
                imageLink: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-3.jpg',
                description: 'Released 2022, September 16',
                price: 689,
                id: '8',
                quantity: 1,
            },
            {
                name: 'Apple iPhone 13 Pro',
                imageLink: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-01.jpg',
                description: 'Released 2021, September 24',
                price: 469,
                id: '9',
                quantity: 1,
                },
                {
                    name: 'Samsung Galaxy S24 Ultra',
                    imageLink: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-0.jpg',
                    description: 'Released 2024, January 24',
                    price: 1260,
                    id: '10',
                    quantity: 1,
                    },
];

export const devicesFetch = () : Promise<Device[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(devices), 500);
    })
};


