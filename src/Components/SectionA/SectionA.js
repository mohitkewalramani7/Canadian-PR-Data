import React from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

import Education from "../General/Education"
import SubsidiaryLanguage from "../General/SubsidiaryLanguage";
import CanadianWorkExperience from "../General/CanadianWorkExperience";

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

            <Education/>

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

            <SubsidiaryLanguage title="Second Official Language"/>

            <CanadianWorkExperience/>

          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}
