import React, { ReactNode, createContext, useState } from "react";
import { CartContextType, Device } from '../../interfaces/interfaces';
import { useDisclosure } from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  onIncrease: () => {},
  onDecrease: () => {},
});

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<Device[]>([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const addToCart = (item: Device) => {
      const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        const updatedCartItems = cartItems.map((cartItem) => {
          if (cartItem.name === item.name) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        })
        setCartItems(updatedCartItems);
      } else {
        const newItem = {...item, id: uuidv4(), quantity: 1} as Device;
        setCartItems((prev) => [...prev, newItem])
      }
    };

    const removeFromCart = (idToRemove: string) => {
      setCartItems(cartItems.filter((item) => item.id !== idToRemove));
    };

    const onIncrease = (name: string) => {
      setCartItems((prev) => {
        return prev.map((item) => {
          if (item.name === name) {
            return {...item, quantity: item.quantity + 1};
          }
          return item;
        })
      })
    };

    const onDecrease = (name: string) => {
      setCartItems((prev) => {
        return prev.map((item) => {
          if (item.name === name) {
            return {...item, quantity: item.quantity - 1};
          }
          return item;
        })
      })
    }

    return (
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isOpen, onOpen, onClose, onIncrease, onDecrease }}>
        {children}
      </CartContext.Provider>
    );
};

export { CartProvider, CartContext };