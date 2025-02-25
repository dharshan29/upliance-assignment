import { Box, Divider, IconButton, Stack } from '@mui/material';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  FormatBold as BoldIcon,
  FormatItalic as ItalicIcon,
  StrikethroughS as StrikethroughIcon,
  FormatListNumbered as ListOrderedIcon,
  FormatListBulleted as ListUnorderedIcon,
} from '@mui/icons-material';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setContent } from '../store/textEditorSlice';

const TextEditor: React.FC = () => {
  const dispatch = useDispatch();
  const content = useSelector((state: RootState) => state.textEditor.content);

  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: 'custom-editor',
      },
    },
    onUpdate({ editor }) {
      dispatch(setContent(editor.getHTML()));
    },
    content: content,
  });

  return (
    <Stack
      tabIndex={0}
      sx={{
        border: '1px solid #00000021',
        borderRadius: '8px',
        background: '#F1F1F15C',
        padding: '0px 8px 10px 8px',
        minHeight: '130px',
        justifyContent: 'space-between',
        '&:hover': {
          border: '1px solid black',
        },
        '&:focus-within': {
          border: '2px solid black',
        },
      }}
    >
      <EditorContent editor={editor} />
      <Stack sx={{ flexDirection: 'row', gap: '4px', alignItems: 'center' }}>
        <IconButton
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleBold().run();
          }}
        >
          <BoldIcon />
        </IconButton>
        <IconButton
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleItalic().run();
          }}
        >
          <ItalicIcon />
        </IconButton>
        <IconButton
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleStrike().run();
          }}
        >
          <StrikethroughIcon />
        </IconButton>
        <Divider orientation="vertical" sx={{ height: '18px', bgcolor: 'rgba(0, 0, 0, 0.1)' }} />
        <IconButton
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleOrderedList().run();
          }}
        >
          <ListOrderedIcon />
        </IconButton>
        <IconButton
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleBulletList().run();
          }}
        >
          <ListUnorderedIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default TextEditor;
