import type { CSSProperties } from 'react';
import { DotLoader } from 'react-spinners';

const loaderStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'hsl(var(--background) / 0.8)',
  backdropFilter: 'blur(4px)',
  zIndex: 9999,
};

export const Loader = () => (
  <div style={loaderStyle}>
    <DotLoader size={60} color='hsl(var(--primary))' />
  </div>
);
