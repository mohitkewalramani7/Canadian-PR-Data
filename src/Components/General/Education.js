import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";
import FormHelperText from "@material-ui/core/FormHelperText";

export default class Education extends React.Component {
  render() {
    return (
      <div>
        <div className="inputFieldDivs">
          <FormControl variant="outlined" className="inputFields">
            <InputLabel>Education</InputLabel>
            <Select
              // value={state.age}
              // onChange={handleChange}
              label="Education"
            >
              <MenuItem value="" />
              <MenuItem value={1}>Less than secondary school (high school)</MenuItem>
              <MenuItem value={2}>Secondary diploma (high school graduation)</MenuItem>
              <MenuItem value={3}>
                <Tooltip title="One-year degree, diploma or certificate from  a
                    university, college, trade or technical school, or other institute">
                  <div>One year degree/diploma/certificate</div>
                </Tooltip>
              </MenuItem>
              <MenuItem value={4}>
                <Tooltip title="Two-year program at a university, college,
                    trade or technical school, or other institute">
                  <div>Two-year program</div>
                </Tooltip>
              </MenuItem>
              <MenuItem value={5}>
                <Tooltip title="Bachelor's degree OR  a three or more year program at
                    a university, college, trade or technical school, or other institute">
                  <div>Bachelor's degree OR a 3+ year program</div>
                </Tooltip>
              </MenuItem>
              <MenuItem value={6}>
                <Tooltip title="Two or more certificates, diplomas, or degrees.
                    One must be for a program of three or more years	">
                  <div>Two or more certificates, diplomas, degrees</div>
                </Tooltip>
              </MenuItem>
              <MenuItem value={7}>
                <Tooltip title="Master's degree, OR professional degree needed to
                      practice in a licensed profession (For “professional degree,” the
                      degree program must have been in: medicine, veterinary medicine,
                      dentistry, optometry, law, chiropractic medicine, or pharmacy.)	">
                  <div>Master's degree OR professional degree (licensed profession)</div>
                </Tooltip>
              </MenuItem>
              <MenuItem value={8}>Doctoral level university degree</MenuItem>
            </Select>
            <FormHelperText>Hover for more details (where applicable)</FormHelperText>
          </FormControl>
        </div>
      </div>
    );
  }
}
