import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import PointsClass from "../PointsClass";

const CLB_4_OR_LESS = "CLB 4 or less";
const CLB_5_OR_6 = "CLB 5 or 6";
const CLB_7_OR_8 = "CLB 7 or 8";
const CLB_9_OR_MORE = "CLB 9 or more";

export default class SubsidiaryLanguage extends PointsClass {

  handleSubsidiaryLanguageChange(event, child){
    super.handleSectionABChange(
      child,
      this.props.target,
      PointsClass.SUBSIDIARY_LANGUAGE_KEY,
      PointsClass.SPOUSE_SUBSIDIARY_LANGUAGE_KEY
    );
  }

  render() {
    return (
      <div className="inputFieldDivs">
        <FormControl variant="outlined" className="inputFields">
          <InputLabel>{this.props.title}</InputLabel>
          <Select
            onChange={this.handleSubsidiaryLanguageChange.bind(this)}
            label={this.props.title}
          >
            <MenuItem id={this.props.target === 'principal' ?
              'second_lang_clb_4_or_less' :
              'spouse_first_lang_clb_4_or_less'}
                      value={0}>{CLB_4_OR_LESS}</MenuItem>
            <MenuItem id={this.props.target === 'principal' ?
              'second_lang_clb_5_6' :
              'spouse_first_lang_clb_5_6'}
                      value={1}>{CLB_5_OR_6}</MenuItem>
            <MenuItem id={this.props.target === 'principal' ?
              'second_lang_clb_7_8' :
              'spouse_first_lang_clb_7_8'}
                      value={2}>{CLB_7_OR_8}</MenuItem>
            <MenuItem id={this.props.target === 'principal' ?
              'second_lang_clb_9_or_more' :
              'spouse_first_lang_clb_9_or_more'
            }
                      value={3}>{CLB_9_OR_MORE}</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
  }
}
