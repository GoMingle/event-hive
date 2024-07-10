const Button = ({ name }) => {
  return (
    <button>
      {name}
    </button>
  );
};

const EventButton = ({ name }) => {
  return (
    <div>
      <Button name={name} />
    </div>
  );
};

export default EventButton;
