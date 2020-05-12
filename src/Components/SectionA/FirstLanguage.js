import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import PointsClass from "../PointsClass";

const LESS_THAN_CLB_4 = "Less than CLB 4";
const CLB_4_OR_5 = "CLB 4 or 5";
const CLB_6 = "CLB 6";
const CLB_7 = "CLB 7";
const CLB_8 = "CLB 8";
const CLB_9 = "CLB 9";
const CLB_10_OR_MORE = "CLB 10 or more";

export default class FirstLanguage extends PointsClass {

  handleFirstLanguageChange(event, child){
    super.handleChange(event, child, "firstLanguage");
  }

  render() {
    return (
      <div className="inputFieldDivs">
        <FormControl variant="outlined" className="inputFields">
          <InputLabel>First Official Language</InputLabel>
          <Select
            onChange={this.handleFirstLanguageChange.bind(this)}
            label="First Official Language"
          >
            <MenuItem id="first_lang_less_than_clb_4"
                      value={0}>{LESS_THAN_CLB_4}</MenuItem>
            <MenuItem id="first_lang_clb_4_5"
                      value={1}>{CLB_4_OR_5}</MenuItem>
            <MenuItem id="first_lang_clb_6"
                      value={2}>{CLB_6}</MenuItem>
            <MenuItem id="first_lang_clb_7"
                      value={3}>{CLB_7}</MenuItem>
            <MenuItem id="first_lang_clb_8"
                      value={4}>{CLB_8}</MenuItem>
            <MenuItem id="first_lang_clb_9"
                      value={5}>{CLB_9}</MenuItem>
            <MenuItem id="first_lang_clb_10_or_more"
                      value={6}>{CLB_10_OR_MORE}</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
  }
}
