import type {ReactNode} from "react"
import { NavBar } from "~/components/navbar"
import {Footer} from "~/components/footer";



export function DefaultLayout ({children}: {children: ReactNode}) {
    return (
        <div className="max-w-7xl mx-auto min-h-screen flex flex-col p-10">
            <header>
                <NavBar />
            </header>
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}