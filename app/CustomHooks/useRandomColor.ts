export const useRandomColor=()=>{
    const getColor=()=>{
        const letters:string="0123456789ABCDEF";
        let hex:string="#"
        for(let i=0;i<6;i++){
         hex +=letters[Math.floor(Math.random()*16)]
        }
        return hex
    }
    return {getColor}
}