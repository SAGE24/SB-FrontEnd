import './NavBar.css'
import imagenInicio from '../../assets/download.svg'
import logo from '../../assets/LogoSB.png'
import { SBContext } from '../../Context'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'

const Navbar = () => {
    const context = useContext(SBContext);

    return(
        <>
            <nav className="colorFondo justify-between fixed z-10 top-0 w-1/6 h-full py-5 px-8 text-sm font-light">
                <ul className="flex flex-col text-white gap-3 cursor-pointer">
                    <li>
                        <img className='w-20 p-0' alt='' src={logo} />
                    </li>
                    <li>
                        <div className='flex flex-col'>
                            <span className='font-semibold text-sm'>SUPERINTENDENCIA DE BANCOS</span>
                            <span className='text-xs'>REPÚBLICA DOMINICANA</span>
                        </div>
                    </li>
                    <li className="colorInicio font-semibold items-center text-sm mt-2 mb-2 p-4 rounded-md">
                        
                        <NavLink to="/" className="flex gap-1" onClick={() => { context.setTitle('') }}>
                            <img alt="" src={imagenInicio} />
                            <span>Inicio</span>
                        </NavLink>
                    </li>
                    <li className="font-semibold text-sm">
                        <NavLink to="/entity-search" onClick={() => { context.setTitle('Consulta') }}>Consulta</NavLink>
                    </li>
                    <li className="font-semibold text-sm">
                        <NavLink to="/entity-maintenance" onClick={() => { context.setTitle('Crear Registro') }}>Crear Registro</NavLink>
                    </li>
                </ul>
                
            </nav>
        </>

    )
}

export default Navbar;