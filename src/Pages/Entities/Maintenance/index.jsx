import { useContext, useEffect, useRef, useState } from 'react'
import { SBContext } from '../../../Context'
import { Link } from 'react-router-dom'
import Layout from '../../../Components/Layout'

const Maintenance = () => {
    const context = useContext(SBContext);
    const form = useRef(null)
    const [entityRecord, setEntityRecord] = useState(null)
    const [option, setOption] = useState('new')
    const currentPath = window.location.pathname
    let index = currentPath.split('/')[currentPath.split('/').length-1];
    
    useEffect(() => {
        if(index == 'entity-maintenance'){
            setOption('new')
            setEntityRecord(null)
        }else {
            setOption('edit')
            void getRecord(index)
        }
    }, null)

    const getRecord = async(code) => {
        const response = await context.instanceEntity(context.token).get(`/entity/record/${code}`)
        setEntityRecord(response.data.data)
    }

    const saveEntity = async(request) => {
        await context.instanceEntity(context.token).post('/entity', request)
    }

    const editEntity = async(request) => {
        console.log(request)
        await context.instanceEntity(context.token).put(`/entity/${request.code}`, request)
    }

    const createRecord = async() => {
        const formData = new FormData(form.current)
        
        const data = {
            code: formData.get('code'),
            name: formData.get('name')
        }

        if(option == 'new') await saveEntity(data)
        else await editEntity(data)
    }

    return (
        <Layout>
            <form ref={form} className="flex flex-col gap-4 w-80">
                <div className="flex flex-col gap-1">
                    <label htmlFor="code" className="font-light text-sm">Código: </label>
                    <input type="text" id="code" name="code" defaultValue={entityRecord?.code}
                        placeholder="código"
                        autoComplete='off'
                        readOnly
                        className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-light text-sm">Nombre/Descripción: </label>
                    <input type="text" id="name" name="name" defaultValue={entityRecord?.name}
                        placeholder="Ingrese nombre/descripción"
                        autoComplete='off'
                        className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                    />
                </div>
                <Link to="/entity-search">
                    <button className="bg-black text-white font-bold w-full rounded-lg py-3 colorFondo"
                        onClick={() => createRecord()}
                    >
                        Guardar
                    </button>
                </Link>
            </form>
        </Layout>
    )
}

export default Maintenance