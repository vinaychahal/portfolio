'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type CursorState = 'default' | 'case-study';

interface CursorContextProps {
  cursorState: CursorState;
  setCursorState: (state: CursorState) => void;
}

const CursorContext = createContext<CursorContextProps>({
  cursorState: 'default',
  setCursorState: () => {},
});

export const useCursor = () => useContext(CursorContext);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [cursorState, setCursorState] = useState<CursorState>('default');

  return (
    <CursorContext.Provider value={{ cursorState, setCursorState }}>
      {children}
    </CursorContext.Provider>
  );
};
