import Link from "next/link";
import React from "react"

export class Navbar extends React.Component {
    render() {
        return <nav className="topnav">
            <Link href="/"><a className="text-xl text-blue-600">Template</a></Link>
        </nav>
    }
}