'use client';

import Card from "@/components/Card";
import Menu from "@/components/Menu";
import { LetterIcon, LetterInviteIcon, ProfileIcon, TopUpIcon } from "@/components/icons";

export default function Page() {
    return(
        <div className="container">
            <div className="grid grid-cols-2 mt-3 mb-6">
                <div className="left-card flex flex-col justify-center">
                    <h3 className="">Anton Wijaya</h3>
                    <p>Rp.50.000</p>
                </div>
                <div className="flex flex-row justify-end">
                    <div className="w-[60px] h-[60px] bg-red-500 rounded-full"></div>
                </div>
            </div>
            <Card>
                <p className="font-bold">Home</p>
                <div className="grid grid-cols-4 mt-2 justify-items-center">
                    <div className="test">
                        <Menu 
                            icon={<ProfileIcon />}
                            title="Profile"
                        />
                    </div>
                    <div className="test">
                        <Menu 
                            icon={<LetterIcon />}
                            title="Undangan"
                        />
                    </div>
                    <div className="test">
                        <Menu 
                            icon={<LetterInviteIcon />}
                            title="Invite"
                        />
                    </div>
                    <div className="test">
                        <Menu 
                            icon={<TopUpIcon />}
                            title="TopUp"
                        />
                    </div>
                </div>
            </Card>
        </div>
    )
}