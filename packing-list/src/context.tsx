import { PropsWithChildren, createContext, useState } from "react";
import { createItem, filterItems, getInitialItems, removeItem, updateItem } from "./lib/items";

export const ItemsContext = createContext({} as ContextProps);


const ItemsProvider = ({ children }: PropsWithChildren) => {
    const [items, setItems] = useState<Item[]>(getInitialItems());
    const [newItemName, setNewItemName] = useState<string>('');

    const add = (name: string) => {
        const item = createItem(name);
        setItems([...items, item]);
    };

    //keyof Item
    const update = (id: string, updates: Omit<Partial<Item>, 'id'> /* UpdateType */): void => {
        setItems(updateItem(items, id, updates));
    };

    const remove = (id: string): void => {
        setItems(removeItem(items, id));
    };

    const unpackedItems = filterItems(items, { packed: false });
    const packedItems = filterItems(items, { packed: true });

    const markAllAsUnpacked = () => {
        return setItems(items.map((item) => ({ ...item, packed: false })));
    };
    return <ItemsContext.Provider value={{
        items,
        newItemName,
        setNewItemName,
        add,
        update,
        remove,
        markAllAsUnpacked,
        unpackedItems,
        packedItems,
    }}>
        {children}
    </ItemsContext.Provider>
}


export default ItemsProvider;