import type {ReactNode} from "react"
import { NavBar } from "~/components/navbar"



export function DefaultLayout ({children}: {children: ReactNode}) {
    return (
        <div className="max-w-7xl mx-auto min-h-screen flex flex-col p-10">
            <header>
                <NavBar />
            </header>
            <main className="flex-grow">
                {children}
            </main>
            <footer className="text-center">
            <p>&copy; 2021</p>
            </footer>
        </div>
    )
}