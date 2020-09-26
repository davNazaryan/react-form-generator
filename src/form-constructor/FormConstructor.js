import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';

class FormConstructor extends React.Component {
  constructor(props) {
    super(props);
    const { formFields } = this.props;
    const formData = {};
    formFields.forEach((field) => { formData[field.name] = ''; });
    this.state = { formData, errorFields: [] };
  }

  handleSubmit() {
    const { formFields, submitHandler } = this.props;
    const { formData } = this.state;

    const errorFields = formFields.filter(
      (field) => field.required && !formData[field.name].length,
    ).map((field) => field.name);
    this.setState({ errorFields });
    if (!errorFields.length) submitHandler({ ...formData });
  }

  handleInput(event, field) {
    const { formData } = this.state;

    const newData = { ...formData, ...{ [field]: event.target.value } };
    this.setState({ formData: newData });
  }

  render() {
    const { formFields } = this.props;
    const { formData, errorFields } = this.state;

    return (
      <form>
        {formFields.map((field) => (
          <div key={field.name}>
            <TextField
              id={field.name}
              name={field.name}
              label={field.label}
              type={field.type}
              value={formData[field.name]}
              onChange={(e) => this.handleInput(e, field.name)}
            />
            { errorFields.includes(field.name) && <p>{field.errorMessage}</p> }
          </div>
        ))}
        <Button onClick={() => this.handleSubmit()}>Submit</Button>
      </form>
    );
  }
}

FormConstructor.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  formFields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      required: PropTypes.boolean,
      errorMessage: PropTypes.string,
    }),
  ).isRequired,
};

export default FormConstructor;
