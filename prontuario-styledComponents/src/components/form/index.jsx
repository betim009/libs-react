export default function Form() {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label
                htmlFor="">
                Nome do paciente:
                <input type="text" />
            </label>

            <label
                htmlFor="">
                Nome do paciente:
                <input type="number" />
            </label>

            <input
                type="submit"
                value="Enviar"
            />
        </form>
    )
}