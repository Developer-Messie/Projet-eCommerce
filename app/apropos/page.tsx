import Heroab from '@/app/apropos/about/Heroab'
import Histoire from '@/app/apropos/about/Histoire'
import Missions from '@/app/apropos/about/Missions'
import Valeurs from '@/app/apropos/about/Valeurs'
import Certific from '@/app/apropos/about/Certific'
import React from 'react'

function Apropos() {
  return (
    <>
      <div>
        <Heroab />
        <Certific />
        <Missions />
        <Valeurs />
        <Histoire />
      </div>
    </>
  )
}

export default Apropos
