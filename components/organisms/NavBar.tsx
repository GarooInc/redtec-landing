import MainLogo from '../atoms/MainLogo';
import { NavLink } from '../atoms/NavLink';
import { Button } from '../atoms/Button';


export const Header: React.FC = () => {
    return (
    <header className="sticky top-0 z-40 w-full">
        <div className="w-full h-24 flex items-center justify-between">
            <MainLogo />
            <nav className="hidden md:flex items-center gap-1">
                    <NavLink variant="primary" href="#how">What We Do</NavLink>
                    <NavLink variant="primary" href="#features">Our Products</NavLink>
                    <NavLink variant="primary" href="#industries">Industries We Serve</NavLink>
                    <NavLink variant="primary" href="#pricing">Trusted by</NavLink>
            </nav>
            <Button variant="primary" size="sm">
                Schedule a Demo
            </Button>
        </div>
    </header>
);
};