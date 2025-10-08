import MainLogo from '../atoms/MainLogo';
import { NavLink } from '../atoms/NavLink';
import { Button } from '../atoms/Button';


export const Header: React.FC = () => {
    return (
    <header className="sticky top-0 z-40 w-full bg-white">
        <div className="w-full h-24 flex items-center justify-between">
            <MainLogo />
            <nav className="hidden md:flex items-center gap-1">
                    <NavLink variant="secondary" href="#how">What We Do</NavLink>
                    <NavLink variant="secondary" href="#features">Our Products</NavLink>
                    <NavLink variant="secondary" href="#industries">Industries We Serve</NavLink>
                    <NavLink variant="secondary" href="#pricing">Trusted by</NavLink>
            </nav>
            <Button variant="outline" size="sm">
                Schedule a Demo
            </Button>
        </div>
    </header>
);
};