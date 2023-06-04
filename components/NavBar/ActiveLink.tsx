import React from 'react'
import Link from "next/link";
import {useRouter} from "next/router";

const style :{color:string} = {
    color: 'red'
}

const style2:{color:string} = {
    color: 'blue'
}

export const ActiveLink = ({text, href}) => {

    const { asPath} = useRouter();

    return (
        <Link style={ asPath === href ? style : style2 } href={href}>{text}</Link>
    )
}
