import React from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";

export default class SectionA extends React.Component {
  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4>A. Core / human capital factors</h4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div style={{width: '100%'}}>
            <div className="inputFieldDivs">
              <TextField
                className="inputFields"
                id="age"
                label="Age"
                variant="outlined" />
            </div>

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

            <div className="inputFieldDivs">
              <FormControl variant="outlined" className="inputFields">
                <InputLabel>First Official Language</InputLabel>
                <Select
                  // value={state.age}
                  // onChange={handleChange}
                  label="First Official Language"
                >
                  <MenuItem value="" />
                  <MenuItem value={1}>Less than CLB 4</MenuItem>
                  <MenuItem value={2}>CLB 4 or 5</MenuItem>
                  <MenuItem value={3}>CLB 6</MenuItem>
                  <MenuItem value={4}>CLB 7</MenuItem>
                  <MenuItem value={5}>CLB 8</MenuItem>
                  <MenuItem value={6}>CLB 9</MenuItem>
                  <MenuItem value={7}>CLB 10 or more</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="inputFieldDivs">
              <FormControl variant="outlined" className="inputFields">
                <InputLabel>Second Official Language</InputLabel>
                <Select
                  // value={state.age}
                  // onChange={handleChange}
                  label="Second Official Language"
                >
                  <MenuItem value="" />
                  <MenuItem value={1}>CLB 4 or less</MenuItem>
                  <MenuItem value={2}>CLB 5 or 6</MenuItem>
                  <MenuItem value={3}>CLB 7 or 8</MenuItem>
                  <MenuItem value={4}>CLB 9 or more</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="inputFieldDivs">
              <FormControl variant="outlined" className="inputFields">
                <InputLabel>Canadian work experience</InputLabel>
                <Select
                  // value={state.age}
                  // onChange={handleChange}
                  label="Canadian work experience"
                >
                  <MenuItem value="" />
                  <MenuItem value={1}>None or less than a year</MenuItem>
                  <MenuItem value={2}>1 year</MenuItem>
                  <MenuItem value={3}>2 years</MenuItem>
                  <MenuItem value={4}>3 years</MenuItem>
                  <MenuItem value={5}>4 years</MenuItem>
                  <MenuItem value={6}>5 years or more</MenuItem>
                </Select>
              </FormControl>
            </div>

          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}
