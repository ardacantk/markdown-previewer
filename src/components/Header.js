import React from 'react';
import { useDispatch } from 'react-redux';
import { updateHelp } from '../redux/textSlice';

function Header() {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(updateHelp())
    }

    return (
        <>
            <div className='btnDiv'>
                <button
                    className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'
                    style={{ fontSize: "30px", fontWeight: "bold", width: "75px", height: "75px" }}
                    onClick={handleClick}
                >?</button>
            </div>
            <h1>
                Markdown Previewer
            </h1>
        </>
    )
}

export default Header
