import logo from '/src/assets/imageLogo.svg'

export default function Logo(){
    return (
        <img
            src={logo}
            alt='main logo'
            height={50}
            width={50}
        />
    )
}