type ReturnTypes<U> = U extends () => any ? ReturnType<U> : never;

type Item = {
  id: string;
  name: string;
  packed: boolean;
};

type UpdateType = { name: string } | { packed: boolean }

type ContextProps = {
  items : Items[],
  newItemName : string,
  setNewItemName :React.Dispatch<React.SetStateAction<string>> ,
  add : (name: string) => void,
  //update : (id: string, updates: UpdateType) => void,
  update : (id: string, updates : Omit<Partial<Item>, 'id'>) => void,
  remove: (id: string) => void,
  markAllAsUnpacked : () => void,
  unpackedItems:Item[],
  packedItems:Item[],
}