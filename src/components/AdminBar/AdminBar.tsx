import './AdminBar.css'

interface Props {
    children : any
}

const AdminBar = ({children}: Props) => {
    return (
        <div className={'admin-bar'}>
            <p>Admin options</p>
            <div className={'admin-button-div'}>
                {children}
            </div>

        </div>
    )
}

export default AdminBar;