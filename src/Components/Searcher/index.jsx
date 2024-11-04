import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { SBContext } from '../../Context'

const Searcher = ({ findRecord, head, detail, editClick, deleteClick }) => {
    const context = useContext(SBContext);

    const edit = (code) => {
        editClick(code)
        context.setTitle('Modificar Registro')
    }

    return (
        <div className='flex flex-col gap-2'>
            <div className='w-full p-3'>
                <div className="flex flex-col gap-1">
                    <input type="text" id="name" name="name" defaultValue=""
                        placeholder="Ingrese dato a buscar" autoComplete='off'
                        className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                        onChange={(event) => {
                            findRecord(event);
                        }}
                    />
                </div>
            </div>
            <div className='w-full p-3 font-bold'>
                <table className='table-fixed md:table-fixed border border-black-500'>
                    <thead>
                        <tr key='title' className="colorFondo text-white">
                            <th className='p-3 border-2 border-black-50'></th>
                            <th className='p-3 border-2 border-black-50'></th>
                            {
                                head.map(item => (
                                    <th className='p-3 border-2 border-black-50' key={item.name}>{item.name}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            detail?.map((item,index) => (
                                <tr key={index}>
                                    <td className='p-3 border-2 font-semibold border-black-50 items-center'>
                                        <Link key={item['code']} to={`/entity-maintenance/${item['code']}`}>
                                            <PencilIcon className="h-4 w-4 text-black cursor-pointer" title='Editar' onClick={() => edit(item['code'])} />
                                        </Link>
                                    </td>
                                    <td className='p-3 border-2 font-semibold border-black-50'>
                                        <TrashIcon className="h-4 w-4 text-black cursor-pointer" title='Eliminar' onClick={() => deleteClick(item['code'])} />
                                    </td>
                                    {
                                        head.map((column, index) => (
                                            <th className='p-3 border-2 font-semibold border-black-50' key={`col_${index}`}>{item[column.value]}</th>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Searcher