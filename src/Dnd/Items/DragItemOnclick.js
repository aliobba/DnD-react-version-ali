const { default: Draggable } = require("../Draggable");


const [isSwiping, setSwiping] = useState(false);

return (
  <div
    onMouseDown={() => {
      setSwiping(false);
    }}
    onMouseMove={() => {
      setSwiping(true);
    }}
    onMouseUp={e => {
      if (!isSwiping && e.button === 0) {
        console.log('dragging');
      } else {
        console.log('not dragging');
      }

      setSwiping(false);
    }}
    onTouchStart={() => {
      setSwiping(false);
    }}
    onTouchMove={() => {
      setSwiping(true);
    }}
    onTouchEnd={e => {
      e.preventDefault();

      if (!isSwiping) {
        console.log('swiping');
      } else {
        console.log('not swiping');
      }

      setSwiping(false);
    }}
  ></div>
);