import React from 'react'
import Father from './Father'
import { FamilyContext } from '../context/FamilyContext'

function Grandfather() {
    const houseName = "Sparta"
    const pocketMoney = "10,000"

  return (
    <FamilyContext.Provider value={{
        houseName,
        pocketMoney
    }}>
        <Father />
    </FamilyContext.Provider>
  )
}

export default Grandfather