import React from "react"

interface CardProps {
    children: React.ReactNode
}

const Card = ({
    children
}: CardProps) => {
    return(
        <div className="w-full h-fit bg-white shodow-box border border-slate-300 p-2 rounded-lg shadow-slate-100 shadow-sm">
            {children}
        </div>
    )
}

export default Card