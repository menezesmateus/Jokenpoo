import './jokenpo.css'
import { useState } from 'react'
import playerChoice from './jokenpo.jsx'

function Jokenpo() {
    const [escolha, setEscolha] = useState(0)
    const [escolhaAleatoria, setEscolhaAleatoria] = useState(0)
    const [placarUsuario, setPlacarUsuario] = useState(0)
    const [placarComputador, setPlacarComputador] = useState(0)
    const [empates, setEmpates] = useState(0)
    const [iniciarJogo, setIniciarJogo] = useState(false)
    const [jogoTerminado, setJogoTerminado] = useState(false)

    const atualizarPlacar = (escolha, escolhaAleatoria) => {
        if (escolha === escolhaAleatoria) {
            setEmpates(empates + 1)
        } else if (
            (escolha === 0 && escolhaAleatoria === 2) ||
            (escolha === 1 && escolhaAleatoria === 0) || 
            (escolha === 2 && escolhaAleatoria === 1)   
        ) {
            const novoPlacarUsuario = placarUsuario + 1
            setPlacarUsuario(novoPlacarUsuario)
            if (novoPlacarUsuario >= 5) {
                setJogoTerminado(true)
            }
        } else {
            const novoPlacarComputador = placarComputador + 1
            setPlacarComputador(novoPlacarComputador)
            if (novoPlacarComputador >= 5) {
                setJogoTerminado(true)
            }
        }
    }

    const handleClick = (escolhaJogador) => {
        if (!iniciarJogo || jogoTerminado) return;
        const escolhaComputador = Math.floor(Math.random() * 3)
        setEscolha(escolhaJogador)
        setEscolhaAleatoria(escolhaComputador)
        atualizarPlacar(escolhaJogador, escolhaComputador)
    }

    const handleIniciarJogo = () => {
        setIniciarJogo(true)
    }

    const handleReiniciarJogo = () => {
        setEscolha(0)
        setEscolhaAleatoria(0)
        setPlacarUsuario(0)
        setPlacarComputador(0)
        setEmpates(0)
        setIniciarJogo(false)
        setJogoTerminado(false)
    }

    return (
        <>
            <div className='containerall'>
                <div className='all'>
                    <div className='header'>
                        <h1>Jokenpo</h1>
                    </div>
                    {!iniciarJogo ? (
                        <div className='iniciar'>
                            <button onClick={handleIniciarJogo}>Iniciar Jogo</button>
                        </div>
                    ) : (
                        <div className='container'>
                            <div className='tabela'>
                                <div>
                                    <h2>PEDRA</h2>
                                    <h2>PAPEL</h2>
                                    <h2>TESOURA</h2>
                                </div>
                                <div className='placar'>
                                    <div>
                                        <h5>PLACAR USUÁRIO</h5>
                                        <h1>{placarUsuario}</h1>
                                    </div>
                                    <div>
                                        <h5>PLACAR COMPUTADOR</h5>
                                        <h1>{placarComputador}</h1>
                                    </div>
                                    <div>
                                        <h5>EMPATES</h5>
                                        <h1>{empates}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {iniciarJogo && !jogoTerminado && (
                        <>
                            <div className='options'>
                                <div className='botoes'>
                                    <button onClick={() => handleClick(0)}>PEDRA</button>
                                    <button onClick={() => handleClick(1)}>PAPEL</button>
                                    <button onClick={() => handleClick(2)}>TESOURA</button>
                                </div>
                                <div>
                                    <h1>COMPUTADOR</h1>
                                </div>
                            </div>
                            <div className='competicao'>
                                <div className='user'>
                                    <img src={playerChoice({ choice: escolha })} alt="" width="250px" />
                                </div>
                                <div className='cpu'>
                                    <img src={playerChoice({ choice: escolhaAleatoria })} alt="" width="250px" />
                                </div>
                            </div>
                        </>
                    )}
                    {jogoTerminado && (
                        <div className='final'>
                            <h2>{placarUsuario >= 5 ? "Usuário venceu!" : "Computador venceu!"}</h2>
                            <button onClick={handleReiniciarJogo}>Jogar Novamente</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Jokenpo
