import { Button } from "@/components/Button";
import Input from "@/components/Input";

export default function Page() {
    return(
        <div className="container">

            <div className="flex justify-center flex-col items-center">
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
                <Button
                    variant="danger"
                    className="mt-2"
                >
                    Login
                </Button>
            </div>
        </div>
    )
}