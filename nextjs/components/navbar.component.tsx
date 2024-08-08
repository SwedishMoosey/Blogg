import Profile from "./profile.component";
import Title from "./title.component";

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between p-4">
            <Title/>
            <Profile/>
        </nav>
    );
};

export default Navbar;