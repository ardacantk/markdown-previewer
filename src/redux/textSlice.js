import { createSlice } from "@reduxjs/toolkit";

const help = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.`;

export const textSlice = createSlice({
    name: "texts",
    initialState: {
        text: 'this is user input',
        textHelp: help,
        isShowingHelp: false,
    },
    reducers: {
        updateText: (state, action) => {
            state.text = action.payload;
            console.log(state.text);
        },
        
        updateHelp: (state, acton) => {
            state.isShowingHelp = !state.isShowingHelp;
            console.log(state.isShowingHelp);
        }
    }
});

export const { updateText, updateHelp } = textSlice.actions;
export default textSlice.reducer;

