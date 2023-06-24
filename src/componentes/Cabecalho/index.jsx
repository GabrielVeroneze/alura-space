import logo from './logo.png'
import search from './search.png'

export default function Cabecalho() {
    return (
        <header>
            <img src={logo} alt="Logo do Alura Space" />
            <input type="text" placeholder="O você procura?" />
        </header>
    )
}