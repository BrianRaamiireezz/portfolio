import './index.css';


function Header()
{
    return (
        <>
            <header className = { 'header' }>
                <p className = { 'header__title' }>
                    Brian's site
                </p>
                <p
                    aria-hidden = { true }
                    className = { 'header__subtitle' }
                >
                    (oᴥo)
                </p>
            </header>
        </>
    );
}


export default Header;