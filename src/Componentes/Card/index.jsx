export default function Card({dataHabilidades}) {

    return (
        <>
        {
        dataHabilidades.map( hab=>(
            <div class="skill-card">
                <h3>{hab.titulo}</h3>
                <p>Nível: {hab.nivel}</p>
            </div>
        )
        )
        }
        </>
    )
}

