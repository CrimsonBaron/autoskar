import { Phone } from "lucide-react";

export function NavBar() {
    return (
        <div className="flex justify-between items-center md:px-15 py-5 flex-1">
            <div className="text-2xl font-bold flex-1">Autoskar</div>
            <button className="flex flex-row gap-2 btn-outline">
                <Phone width={20} strokeWidth={3} />
                Kontakt
            </button>
        </div>
    )
}