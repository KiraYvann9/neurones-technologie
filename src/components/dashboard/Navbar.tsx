
import logo from '../../../public/assets/navlogo.png';
import Image from 'next/image'

export const Navbar =() =>{
    return(
        <nav className={'fixed border-b h-16 w-full px-8 flex items-center'}>
            <Image src={logo} alt={''}/>
        </nav>
    )
}