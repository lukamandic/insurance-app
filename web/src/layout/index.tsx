import { ReactElement } from "react"
import './index.css'

interface LayoutProps {
    header: ReactElement
    main: ReactElement
}

export const Layout = ({ header, main }: LayoutProps) => {
    return (
        <div className="whole__page">
            { header }

            <div className="main__content">
                { main }
            </div>
        </div>
    )
}