import { ReactNode } from 'react'
import Navbar from '../../Components/Navbar'

interface BaseProps {
  children: ReactNode;
}

export const Base: React.FC<BaseProps> = ({children}) => {
  return (
    <div className='page'>
        <Navbar/>
        <main>{children}</main>
    </div>
  )
}
