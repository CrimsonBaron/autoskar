import { Phone } from "lucide-react";

export function NavBar() {

    const scrollToContact = () =>{
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="flex justify-between items-center md:px-15 py-5">
            <div className="text-2xl font-bold flex-1">Autoskar</div>
            <button className="flex flex-row gap-2 btn-outline" onClick={scrollToContact}>
                <Phone width={20} strokeWidth={3} />
                Kontakt
            </button>
        </div>
    )
}