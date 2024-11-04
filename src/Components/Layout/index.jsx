import { useContext } from 'react'
import { SBContext } from '../../Context'

const Layout = ({children}) => {
    const context = useContext(SBContext);

    return (
        <div className="flex flex-col items-center h-full">
            <div className='flex flex-row gap-y-0 w-full'>
                <div className='w-1/6 min-h-96'></div>
                <div className='colorFondo flex flex-col w-5/6'>
                    <div className="w-full p-4 m-0">
                        <span className="text-lg text-white">{context.title}</span>
                    </div>
                    <div className="colorFondoPag w-full rounded-t-lg">
                        <div className="bg-white w-full min-h-96 m-4 p-4 rounded-lg">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;