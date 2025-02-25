import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TextEditorState {
  content: string;
}

const initialState: TextEditorState = {
  content: '',
};

const textEditorSlice = createSlice({
  name: 'textEditor',
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
  },
});

export const { setContent } = textEditorSlice.actions;
export default textEditorSlice.reducer;
