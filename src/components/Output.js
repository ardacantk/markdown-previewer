import React from 'react';
import { marked } from "marked"
import { useSelector } from 'react-redux'

function Output() {
    const inpText = useSelector(state => state.texts.text);
    const helpText = useSelector(state => state.texts.textHelp);
    const isShowingHelp = useSelector(state => state.texts.isShowingHelp);

    const createMarkUp = (text) => {
        return {__html: marked(text)}
    }

    return (
        <>
            <div 
            dangerouslySetInnerHTML={createMarkUp(isShowingHelp ? helpText : inpText)}
            className="text-panel-right">
                
            </div>
        </>
    )
}

export default Output
