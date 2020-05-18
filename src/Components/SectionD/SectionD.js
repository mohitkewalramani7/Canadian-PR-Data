import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

import FormCheckbox from "../General/Checkbox";
import PointsClass from "../PointsClass";


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
              onChange={
                () => this.sectionDHandleChange(PointsClass.SIBLING_IN_CANADA)}
              title="Brother or sister living in
              Canada who is a citizen or permanent resident of Canada"/>
            <FormCheckbox
              onChange={
                () => this.sectionDHandleChange(PointsClass.NCLC_7_HIGHER_CLB_4_LOWER)}
              title="Scored NCLC 7 or higher on all four
              French language skills and scored CLB 4 or lower in
              English (or didn’t take an English test)"/>
            <FormCheckbox
              onChange={
                () => this.sectionDHandleChange(PointsClass.NCLC_7_HIGHER_CLB_5_HIGHER)}
              title="Scored NCLC 7 or higher on all four
              French language skills and scored CLB 5 or higher on all
              four English skills	"/>
            <FormCheckbox
              onChange={
                () => this.sectionDHandleChange(PointsClass.POST_SECONDARY_EDUCATION_CANADA_1_2_YEARS)}
              title="Post-secondary education in
              Canada - credential of one or two years	"/>
            <FormCheckbox
              onChange={
                () => this.sectionDHandleChange(PointsClass.POST_SECONDARY_EDUCATION_CANADA_3_YEARS)}
              title="Post-secondary education in Canada -
              credential three years or longer	"/>
            <FormCheckbox
              onChange={
                () => this.sectionDHandleChange(PointsClass.ARRANGED_EMPLOYMENT_NOC_00)}
              title="Arranged employment - NOC 00"/>
            <FormCheckbox
              onChange={
                () => this.sectionDHandleChange(PointsClass.ARRANGED_EMPLOYMENT_NOC_0_A_B)}
              title="Arranged employment – any other NOC 0, A or B"/>
            <FormCheckbox
              onChange={
                () => this.sectionDHandleChange(PointsClass.PROVINCIAL_TERRITORIAL_NOMINATION)}
              title="Provincial or territorial nomination"/>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}
