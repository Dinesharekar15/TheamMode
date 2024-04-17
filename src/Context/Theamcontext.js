import { createContext,useContext } from "react";

export const Theamcontext =createContext({
    theammode:"dark",
    lightmode:()=>{},
    darkmode:()=>{},
})

export const Theamprovider=Theamcontext.Provider;


export default function useTheam(){
    const theam =useContext(Theamcontext)
    return theam;
}