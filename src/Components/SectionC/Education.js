import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

export default class Education extends React.Component {
  render() {
    return (
      <div>
        <div className="inputFieldDivs">
          <h5>{this.props.title}</h5>
          <FormControl variant="outlined" className="inputFields">
            <InputLabel>Select One</InputLabel>
            <Select
              value=''
              label="Education"
            >
              <MenuItem id="dropdownOptionWrap" value="" />
              <MenuItem id="dropdownOptionWrap" value={1}>Secondary school (high school) credential or less</MenuItem>
              <MenuItem id="dropdownOptionWrap" value={2}>Post-secondary program credential of one year or longer</MenuItem>
              <MenuItem id="dropdownOptionWrap" value={3}>
                Two or more post-secondary program credentials AND
                at least one of these credentials was issued on completion of a
                post-secondary program of three years or longer	</MenuItem>
              <MenuItem id="dropdownOptionWrap" value={4}>
                A university-level credential at the master’s level or
                at the level of an entry-to-practice professional degree for an occupation
                listed in the National Occupational Classification matrix at Skill Level
                A for which licensing by a provincial regulatory body is required	</MenuItem>
              <MenuItem id="dropdownOptionWrap" value={5}>A university-level credential at the doctoral level</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}
