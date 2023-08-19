import Link, { LinkProps } from "next/link";
import React from "react";

type PropsLink = LinkProps
type PickClassName = Pick<HTMLAnchorElement, "className">
interface PropsDirectLink extends PickClassName {
    label: string,
}

const DirectLink = ({ label , href, ...props}: PropsLink & PropsDirectLink) => {
    return(
        <Link
            href={href}
            {...props}
        >
           {label}
        </Link>
    )
}

export default DirectLink