import React, { createContext, useState } from 'react'

export const ButtonColorContext =createContext();
export const ButtonColorContextDynamic =createContext();

export const ButtonColorContextProvider =({children})=>{

    const color= {
        plus:"#B1ACE6",minus:"#CED7DC"
    };
   
    return (
      <ButtonColorContext.Provider value={{color}}>
        {children}
      </ButtonColorContext.Provider>
    )

}