const Digit = (props) => {
  let digit = [];
  for (let i = 1; i < 10; i++) {
    digit.push(
      <button onClick={() => props.onAdd(i.toString())} key={i}>
        {i}
      </button>
    );
  }

  return digit;
};
export default Digit;
