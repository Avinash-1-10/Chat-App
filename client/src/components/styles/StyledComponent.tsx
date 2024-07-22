import { styled } from '@mui/material';
import { Link as L } from 'react-router-dom';

export const VisuallyHiddenInput = styled('input')({
  border: 0,
  clip: 'rect(0, 0, 0, 0)',
  clipPath: 'inset(50%)',
  height: 1,
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
});

export const Link = styled(L)({
  textDecoration: 'none',
  color: 'black',
  cursor: 'pointer',
  padding: '1rem',
  '&:hover': {
    textDecoration: 'underline',
    color: '#0f0f0f',
  },
});
