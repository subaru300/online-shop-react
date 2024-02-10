export interface Device {
    name: string;
    imageLink: string;
    description: string;
    price: number;
    id: string;
    quantity: number;
}

export interface CartContextType {
    cartItems: Device[];
    addToCart: (item: Device) => void;
    removeFromCart: (idToRemove: string) => void;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onIncrease: (itemName: string) => void;
    onDecrease: (itemName: string) => void;
}

export interface BuyNowDialog {
    isOpen:  boolean;
    onClose: () => void;
  }

export interface SideFilterProps {
    onChoseBrand: (title: string) => void;
}