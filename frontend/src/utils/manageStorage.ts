export const setSessionStorage = (label:string, data:string) => {
    sessionStorage.setItem(label, data)
}

export const getSessionStorage = (label:string) =>{
   return sessionStorage.getItem(label)
} 