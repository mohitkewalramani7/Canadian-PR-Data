import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

import FormCheckbox from "../General/Checkbox";
import PointsClass from "../PointsClass";

const SIBLING = "sibling_in_canada";
const NCLC_7_HIGHER_CLB_4_LOWER = "nclc_7_or_higher_and_clb_4_or_lower";
const NCLC_7_HIGHER_CLB_5_HIGHER = "nclc_7_or_higher_and_clb_5_or_higher";
const POST_SEC_EDU_IN_CANADA_ONE_OR_TWO_YRS = "post_secondary_education_in_canada_1_or_2_years";
const POST_SEC_EDU_IN_CANADA_THREE_YRS_LONGER = "post_secondary_education_in_canada_3_years_longer";
const NOC_00_ARRANGED_EMPLOYMENT = "arranged_employment_noc_00";
const NOC_0_A_B_ARRANGED_EMPLOYMENT = "arranged_employment_noc_0_a_b";
const PROVINCIAL_TERRITORIAL_NOMINATION = "provincial_or_territorial_nomination";


export default class SectionD extends PointsClass {

  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4>D. Additional points</h4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div style={{textAlign: 'left'}}>
            <FormCheckbox
              onChange={() => this.sectionDHandleChange(SIBLING)}
              title="Brother or sister living in
              Canada who is a citizen or permanent resident of Canada"/>
            <FormCheckbox
              onChange={() => this.sectionDHandleChange(NCLC_7_HIGHER_CLB_4_LOWER)}
              title="Scored NCLC 7 or higher on all four
              French language skills and scored CLB 4 or lower in
              English (or didn’t take an English test)"/>
            <FormCheckbox
              onChange={() => this.sectionDHandleChange(NCLC_7_HIGHER_CLB_5_HIGHER)}
              title="Scored NCLC 7 or higher on all four
              French language skills and scored CLB 5 or higher on all
              four English skills	"/>
            <FormCheckbox
              onChange={() => this.sectionDHandleChange(POST_SEC_EDU_IN_CANADA_ONE_OR_TWO_YRS)}
              title="Post-secondary education in
              Canada - credential of one or two years	"/>
            <FormCheckbox
              onChange={() => this.sectionDHandleChange(POST_SEC_EDU_IN_CANADA_THREE_YRS_LONGER)}
              title="Post-secondary education in Canada -
              credential three years or longer	"/>
            <FormCheckbox
              onChange={() => this.sectionDHandleChange(NOC_00_ARRANGED_EMPLOYMENT)}
              title="Arranged employment - NOC 00"/>
            <FormCheckbox
              onChange={() => this.sectionDHandleChange(NOC_0_A_B_ARRANGED_EMPLOYMENT)}
              title="Arranged employment – any other NOC 0, A or B"/>
            <FormCheckbox
              onChange={() => this.sectionDHandleChange(PROVINCIAL_TERRITORIAL_NOMINATION)}
              title="Provincial or territorial nomination"/>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}
