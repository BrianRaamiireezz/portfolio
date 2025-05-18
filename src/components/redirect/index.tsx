import { useEffect } from 'react';
import { useNavigate } from 'react-router';


function Redirect()
{
    const navigate = useNavigate();

    useEffect(
        () =>
        {
            navigate( '/' );
        },
        [ navigate ],
    );

    return (
        <></>
    );
}


export default Redirect;