import Colaborador from '../Colaborador'
import './Time.css'
const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    return (
        (props.colaboradores.length > 0) ?
            <section className='time' style={css}>
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(colaborador => <Colaborador key={colaborador.name} corDeFundo={props.corPrimaria} nome={colaborador.name} cargo={colaborador.cargo} imagem={colaborador.image} />)}
                </div>
            </section > : ''

    )
}

export default Time

