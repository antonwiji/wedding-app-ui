import { Button } from "@/components/Button";
import Input from "@/components/Input";

export default function Page() {
    return(
        <div className="container">
            <div className="max-w-screen-sm">
                <div className="flex flex-col">
                    <Input 
                    label="Email"
                    placeholder="Masukkan Email"
                    type="email"
                    />
                    <Input 
                    label="Password"
                    placeholder="Password"
                    type="password"
                    />
                    <Input 
                    label="No Phone"
                    placeholder="Masukkan Nomor Phone"
                    />
                    <Button
                        variant="danger"
                        className="mt-2"
                    >
                        Register
                    </Button>
                </div>
            </div>
        </div>
    )
}