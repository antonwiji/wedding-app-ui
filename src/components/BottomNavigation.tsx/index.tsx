import Menu from "../Menu"
import { LetterIcon, LetterInviteIcon, ProfileIcon } from "../icons"

const BottomNavigation = () => {
    return(
        <div className="absolute bottom-0 left-0 w-full bg-white h-14">
            <div className="grid justify-items-center grid-cols-3 p-1">
                <div className="">
                <Menu
                    icon={<LetterInviteIcon size="30px" />}
                    title="Invite"
                    />
                </div>
                <div className="">
                    <Menu
                    icon={<LetterIcon size="30px" />}
                    title="Undangan"
                />
                </div>
                <div className="">
                    <Menu
                    icon={<ProfileIcon size="30px" />}
                    title="Profile"
                    />
                </div>
            </div>
        </div>
    )
}

export default BottomNavigation