import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba'
const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    const css = { backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, 0.6) }
    return (
        (colaboradores.length > 0) ?
            <section className='time' style={css}>
                <input onChange={evento => mudarCor(evento.target.value, time.id)} value={time.cor} type='color' className='input-cor' />
                <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
                <div className='colaboradores'>
                    {colaboradores.map(colaborador => <Colaborador key={colaborador.name} colaborador={colaborador} corDeFundo={time.cor} aoDeletar={aoDeletar} aoFavoritar={aoFavoritar} />)}
                </div>
            </section > : ''

    )
}

export default Time

