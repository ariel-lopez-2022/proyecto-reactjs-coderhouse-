import React,{ useState, useContext } from "react";

const CartContext = React.createContext ([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children })=>{
        const [cart, setCart] = useState([]);
     
        
    const AddItem = (item, quantity)=>{
      if (IsInCart(item.id)){
         setCart(cart.map(prod => {
            return prod.id === item.id ? {...prod, cantidad: prod.cantidad + quantity}: prod}));
      } else {
         setCart([...cart, {...item, cantidad:quantity}]);
      }

    }; //agrega cantidad de items al carrito


    const RemoveItem = (id)=>{
        setCart(cart.filter(prod => prod.id = !id));     
    }; //elimina items del carrito x id

    const ClearCart = ()=>{
        setCart([]);
    }; //Elimina carrito


    const IsInCart= (id)=>{
        return cart.find(prod => prod.id === id) ? true : false;
    };// saber si se encuentra producto en el carrito 

    
        return(
        <CartContext.Provider value={{
            RemoveItem,
            ClearCart,
            IsInCart,
            AddItem,
            
        }}>
            {children}
        </CartContext.Provider>
        )
    }
export default CartProvider ;