import { MenuProps } from "./type"

const Menu = ({ title, icon, onClick} : MenuProps) => {
    return(
        <button onClick={onClick}>
            <div className="flex flex-col items-center">
                <div className="">
                    {icon}
                </div>
                <div className="">
                    <p>{title}</p>
                </div>
            </div>
        </button>
       
    )
}

export default Menu