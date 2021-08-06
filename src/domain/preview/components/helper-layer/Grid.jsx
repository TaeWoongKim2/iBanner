import React from 'react';

import { Line } from 'react-konva';

export default function Liner({
  points,
  stroke = '#ddd',
  strokeWidth = 1,
}) {
  return (
    <Line
      points={points}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  );
}

export const MemoizedLine = React.memo(Line);
