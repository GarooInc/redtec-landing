const MainLogo: React.FC<{ className?: string }> = ({ className }) => (
    <div className={["flex items-center gap-2", className].join(" ")}>
        <img src="/assets/images/logos/logo1.png" alt="RedTec Logo" className="w-28"/>
    </div>
);

export default MainLogo;