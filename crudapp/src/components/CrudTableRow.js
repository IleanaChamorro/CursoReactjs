import React from 'react'

const CrudTableRow = ({el, setDataAEditar, borrarData}) => {
    let {name, team, id} = el;
    return (
            <tr>
                <td>{name}</td>
                <td>{team}</td>
                <td>
                    <button onClick={() => setDataAEditar(el)}  >Editar</button>
                    <button onClick={() => borrarData(id)}>Eliminar</button>
                    </td>
                </tr>
    )
}

export default CrudTableRow
