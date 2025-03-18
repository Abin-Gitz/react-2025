import './grid.css';

const Grid = props => {
  let str = [];
  for (let i = 0; i < props.number; i++) {
    str.push({ color: props.color[i] });
  }
  return (
    <>
      <div className="container">
        {str.map(item => (
          <div
            className="grid-box"
            style={{ backgroundColor: item.color }}
          ></div>
        ))}
      </div>
      
    </>
  );
};

export default Grid;
