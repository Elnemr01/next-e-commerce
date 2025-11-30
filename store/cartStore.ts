import { it } from "node:test";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    imageUrl: string ;
    quantity: number;
}

export interface CartStore {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
    // getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(persist((set)=> ({
    items: [],
    addItem: (item:CartItem) => {
        set((state) => {
            const existingItem = state.items.find(i => i.id === item.id);
            if (existingItem) {
                return {
                    items: state.items.map(i =>
                        i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                    ),
                };
            } else {
                return { items: [...state.items, item] };
            }
        })
    },
    removeItem: (id:string)=> {
        set((state)=> {
            let theItem=state.items.find(item=>item.id===id);
            if(theItem && theItem.quantity>1){
                return {
                    items: state.items.map(item=>
                        item.id===id ? {...item, quantity: item.quantity -1} : item
                    )
                }
            }else{
                return {
                    items: state.items.filter(item=> item.id !== id)
                }
            }
        })
    },
    clearCart: () => {
        set({ items: [] });
    }
}),{name:"cart"}));






































// export const useCartStore =create<CartStore>()(persist((set, get) => ({
//     items: [],
//     addItem: (item: CartItem) => {
//         set((state) => {
//             const existingItem = state.items.find(i => i.id === item.id);
//             if (existingItem) {
//                 return {
//                     items: state.items.map(i =>
//                         i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
//                     ),
//                 };
//             } else {
//                 return { items: [...state.items, item] };
//             }
//         });
//     },
//     removeItem: (id: string) => {
//         set((state) => ({
//             items: state.items.filter(item => item.id !== id),
//         }));
//     },
//     clearCart: () => {
//         set({ items: [] });
//     },
//     getTotalPrice: () => {
//         const items = get().items;
//         return items.reduce((total, item) => total + item.price * item.quantity, 0);
//     },
// }));
