import React from "react";
import Input from "./Input";

const Form = (props) => {
  let inputs;
  if (props.login) {
    inputs = Object.entries(props.login).map((input) => (
      <Input
        type={input[1].type}
        attrs={input[1].attrs}
        key={input[0]}
        label={input[0]}
        value={input[1].value}
        change={props.change}
      />
    ));
  } else if (props.signIn) {
    inputs = Object.entries(props.signIn).map((input) => (
      <Input
        type={input[1].type}
        attrs={input[1].attrs}
        key={input[0]}
        label={input[0]}
        value={input[1].value}
        change={props.change}
      />
    ));
  }
  return (
    <form onSubmit={props.submit} className="form">
      <div className="form__group">
        <h3 className="form__title">{props.title}</h3>
      </div>

      {inputs}

      <div className="form__group">
        <button type="submit" className="form__btn">
          {props.use}
        </button>
      </div>
    </form>
  );
};

export default Form;