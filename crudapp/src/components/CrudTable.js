import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({data, setDataAEditar, borrarData}) => {
    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Team</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ?( 
                        data.map((el) =>( 
                        <CrudTableRow 
                        key={el.id} 
                        el={el} 
                        setDataAEditar={setDataAEditar}
                        borrarData={borrarData}
                        />
                        ))
                        ) : ( 
                        <tr>
                            <td colSpan="3">Sin Datos</td>
                        </tr> 
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable
