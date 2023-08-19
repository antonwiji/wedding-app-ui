import { Button } from "@/components/Button";
import DirectLink from "@/components/DirectLink";
import Input from "@/components/Input";

export default function Page() {

    return(
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
                    <Button
                        className="mt-2"
                    >
                        Login
                    </Button>
                    <DirectLink
                     href="/register"
                     label="Register"
                     className="text-red-500 text-center"
                    />
            </div>
    )
}