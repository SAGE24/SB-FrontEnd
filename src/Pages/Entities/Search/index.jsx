import Layout from '../../../Components/Layout';
import { SBContext } from '../../../Context'
import { useContext, useEffect, useState } from 'react'
import Searcher from '../../../Components/Searcher'
import Swal from 'sweetalert2'

const Search = () => {
    const context = useContext(SBContext);
    const [records, setRecords] = useState([])

    const arrHead = [
        { name: 'Código', value: 'code' },
        { name: 'Nombre', value: 'name' }
    ]

    const loadEntity = async(fact) => {
        const response = await context.instanceEntity(context.token).get(`/entity/all/${fact}`)
        setRecords(response.data.data)
    }

    useEffect(() => {
        void loadEntity('')
        
    }, [])

    const findRecord = (event) => {
        loadEntity(event.target.value);
    }

    const editRecord = (code) => {
        console.log(code)
    }

    const deleteRecord = async(code) => {
        Swal.fire({
            title: "¿Desea eliminar registro?",
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: "Eliminar",
            cancelButtonText: 'No'
          }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await context.instanceEntity(context.token).delete(`/entity/${code}`)
                if(response['data']['status'] == 0) void loadEntity('')
            }
          })
    }

    return (
        <Layout>
            <Searcher findRecord={findRecord} head={arrHead} detail={records} 
                editClick={editRecord} deleteClick={deleteRecord}
            />
        </Layout>
    )
}

export default Search