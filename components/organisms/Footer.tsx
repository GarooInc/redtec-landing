import { NavLink } from "../atoms/NavLink"
import { RiSendPlaneFill } from "react-icons/ri";


const Footer: React.FC = () => {
    return (
        <section className="px-5 sm:px-8 lg:px-10 py-4">
            <footer className="relative bg-white rounded-3xl border border-black/10 shadow-sm p-6 sm:p-8 lg:p-10 ring-1 ring-black/5">
                {/* Grid superior */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {/* Join Newsletter (ocupa 2 columnas en desktop) */}
                <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold mb-4">Join Newsletter</h3>
                    <div className="relative">
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full h-12 rounded-full bg-neutral-100 border border-neutral-200 placeholder-neutral-400 px-5 pr-14 outline-none focus:ring-2 focus:ring-neutral-200"
                    />
                    <button
                        type="button"
                        aria-label="Subscribe"
                        className="absolute right-1 top-1 h-10 w-10 rounded-full bg-black text-white grid place-items-center"
                    >
                        <RiSendPlaneFill className="h-5 w-5" />
                    </button>
                    </div>
                    <p className="mt-3 text-sm text-neutral-500 max-w-sm">
                    Subscribe to receive a AI Weekly Newsletter. All made without human intervention.
                    </p>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Company</h3>
                    <div className="flex flex-col gap-3 text-neutral-500">
                        <NavLink href="#">Visión</NavLink>
                        <NavLink href="#">Team</NavLink>
                        <NavLink href="#">Careers</NavLink>
                    </div>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Resources</h3>
                    <div className="flex flex-col gap-3 text-neutral-500">
                        <NavLink href="#">CRM Agent</NavLink>
                        <NavLink href="#">Data Agent</NavLink>
                        <NavLink href="#">Satelital Agent</NavLink>
                    </div>
                </div>

                {/* Industries */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Industries</h3>
                    <div className="flex flex-col gap-3 text-neutral-500">
                        <NavLink href="#">Hospitality</NavLink>
                        <NavLink href="#">Real Estate</NavLink>
                        <NavLink href="#">Agriculture</NavLink>
                    </div>
                </div>

                {/* Contact Us */}
                <div className="sm:col-span-2 lg:col-span-1">
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <div className="flex items-center gap-4">
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/company/redtecai" aria-label="LinkedIn" className="h-10 w-10 rounded-full border border-neutral-200 grid place-items-center hover:bg-neutral-100">
                        <img src="assets/images/icons/li_icon.png" alt="LinkedIn" className=" w-5" />
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/redtec.ai/" aria-label="Instagram" className="h-10 w-10 rounded-full border border-neutral-200 grid place-items-center hover:bg-neutral-100">
                        <img src="assets/images/icons/ig_icon.png" alt="Instagram" className=" w-5" />
                    </a>

                    {/* WhatsApp */}
                    <a href="#" aria-label="WhatsApp" className="h-10 w-10 rounded-full border border-neutral-200 grid place-items-center hover:bg-neutral-100">
                        <img src="assets/images/icons/wha_icon.png" alt="WhatsApp" className="w-5" />
                    </a>
                    {/* Email */}
                    <a href="mailto:hello@redtec.ai" aria-label="Email" className="h-10 w-10 rounded-full border border-neutral-200 grid place-items-center hover:bg-neutral-100">
                        <img src="assets/images/icons/mail_icon.png" alt="Email" className="w-5" />
                    </a>
                    </div>
                </div>
                </div>

                {/* Separador inferior */}
                <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-neutral-600">RedTec © Copyright 2025</div>

                <img src="assets/images/logos/logo1.png" alt="RedTec Logo" className="w-20" />

                <div className="flex items-center gap-4 text-sm text-neutral-700 justify-start sm:justify-end">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <span className="text-neutral-300">|</span>
                    <a href="#" className="hover:underline">Terms of Service</a>
                </div>
                </div>
            </footer>
            </section>
    )
}

export default Footer;
