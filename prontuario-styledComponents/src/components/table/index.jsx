export default function Table({ propsUsuarios }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Paciente</th>
                    <th>Idade</th>
                </tr>
            </thead>

            <tbody>
                {propsUsuarios.map(e => (
                    <tr key={e.nome}>
                        <td>{e.nome}</td>
                        <td>{e.idade}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}