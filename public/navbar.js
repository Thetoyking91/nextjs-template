import Link from "next/link";
import React from "react"

export class Navbar extends React.Component {
    render() {
        return <nav className="topnav">
            <Link href="/"><a className="text-xl text-blue-600">Niblet</a></Link>
            <Link href="/comments/"><a className="text-xl text-blue-600">Comments</a></Link>
        </nav>
    }
}