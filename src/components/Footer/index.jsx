import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.linkedin.com/in/fernando-pena-rua/'>
                <img src="/img/linkedin.png" alt='Linkedin' />
            </a>
            <a href='https://github.com/fernanp23'>
                <img src="/img/github.png" alt='Github' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Fernando Peña</strong>
    </footer>
}

export default Footer