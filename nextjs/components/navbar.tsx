import Profile from "./profile";
import Title from "./title";

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between p-4">
            <Title/>
            <Profile/>
        </nav>
    );
};

export default Navbar;