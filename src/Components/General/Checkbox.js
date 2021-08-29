import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function FormCheckbox(props) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          color="primary"
          onChange={props.onChange}
        />
      }
      label={props.title}
      style={{width: '100%', marginBottom: '20px'}}
    />
  )
}

export default FormCheckbox
