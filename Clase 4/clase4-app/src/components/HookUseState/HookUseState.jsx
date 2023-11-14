import { useState } from "react"

export const HookUseState = () => {
    const[count, setCount] = useState(0);
    console.log(count);

const handkeSum = () => {
    setCount(count + 1);
}
const handkeRes = () => {
    if(count==0){
        return setCount(0)
    }
    setCount(count - 1);
}
const handkeReset = () => {
    setCount(0);
};
  return (
    <>
    <div>count : {count}</div>
    <button onClick={handkeSum}>Sumar</button>
    <button onClick={handkeRes}>Restar</button>
    <button onClick={handkeReset}>Reset</button>
    </>
  )

}
