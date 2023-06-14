import React, { useContext } from 'react'
import { FamilyContext } from '../context/FamilyContext'

const style = {
    color: "red",
    fontWeight: "900",
}


function Child() {
    const data = useContext(FamilyContext)

  return (
    <div>
        My house name is <span style={style}>{data.houseName}</span> <br />
        And I got <span style={style}>{data.pocketMoney}</span> won for the allowance
    </div>
  ) 
}

export default Child