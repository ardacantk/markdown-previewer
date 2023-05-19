import { useState } from 'react';
import { updateText } from '../redux/textSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"

function Innput() {
    const dispatch = useDispatch();
    const text = useSelector(state => state.texts.text)
    const helpText = useSelector(state => state.texts.textHelp);
    const isShowingHelp = useSelector(state => state.texts.isShowingHelp);

    const handleChange = (e) => {
        dispatch(updateText(e))
    }

    return (
        <>
            <textarea
                value={isShowingHelp ? helpText : text}
                className="text-panel-left"
                onChange={(e) => handleChange(e.target.value)}
            >
            </textarea>
        </>
    )
}

export default Innput

