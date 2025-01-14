type GridPropsType = {
  columns: number,
  gap: number,
}

const Grid = ({ columns, gap }: GridPropsType) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: gap,
  };

  return (
    <div style={gridStyle}></div>
  );
}

export default Grid;
