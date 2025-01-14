import { ReactNode } from "react";

type GridPropsType = {
  columns: number,
  gap: number,
  children?: ReactNode,
}

 export const Grid = ({ columns, gap, children }: GridPropsType) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: gap,
  };

  return (
    <div style={gridStyle}>{children}</div>
  );
}

export default Grid;
