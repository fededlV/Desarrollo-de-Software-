import PropTypes from "prop-types";

export function Button({ text, name }) {
  console.log(text);
  if (!text) {
    console.error("Text is required");
  }
  /* return (
    <button>
      {text} - {name}
    </button>
  ); */
  return (
    <button
      onClick={function () {
        console.log("Click");
      }}
    >
      {text}
    </button>
  );
}
//Indica el tipo de dato que se espera que sea pasado
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
//Indica un valor por defecto
Button.defaultProps = {
  name: "Usuario",
};
