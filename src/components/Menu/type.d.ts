import React from "react";

export interface MenuProps {
    title: string,
    icon?: React.ReactNode,
    onClick?() : void
}