import './index.css'

interface HeaderProps {
    text: string
}

export const Header = ({ text }: HeaderProps) => {
    return (
        <div >
            <h1 className="header">{ text }</h1>
        </div>
    )
}