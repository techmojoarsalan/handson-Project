import React, { createContext , useContext } from 'react'
import products from "./products.json"
export const ContextApi =  createContext();


function Context({children}){
//  const obj = { name : "Arsalan"}
    
  return (
    <ContextApi.Provider value={products}>{children}</ContextApi.Provider>
  )
}

export default Context


export function useAppContext() {
  return useContext(ContextApi);
}