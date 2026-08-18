import { useNavigate } from "react-router-dom";

function NavButton() {
    const nav = useNavigate();

    function onHome() {
        nav('/');
    }

    function onContact() {
        nav('/contact');
    }

    function onProduct() {
        nav('/products');
    }

    function onAbout() {
        nav(-1); // Go To Previous Page
    }
    return(
        <div >
            <h1> UseNavigation </h1>
            <button onClick={onHome}> Go Home </button>
            <button onClick={onAbout}> Go About </button>
            <button onClick={onContact}> Go Contact </button>
            <button onClick={onProduct}> Go Product </button>
        </div>
    );
};

export default NavButton;