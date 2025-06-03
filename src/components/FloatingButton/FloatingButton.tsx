import { Button } from "./styles";

const FloatingButton = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/34622377041?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría.%20",
      "_blank"
    );
  };

  return (
    <Button onClick={handleClick}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </Button>
  );
};

export default FloatingButton;