import type {ReactNode} from "react"
import { NavBar } from "~/components/navbar"
import {Footer} from "~/components/footer";



export function DefaultLayout ({children}: {children: ReactNode}) {
    return (
        <div className="mx-auto min-h-screen flex flex-col p-10">
            <header className="max-w-7xl flex justify-between flex-col items-center">
                <NavBar />
            </header>
            <main className="flex-grow justify-center flex flex-col items-center">
                {children}
            </main>
            <Footer />
        </div>
    )
}