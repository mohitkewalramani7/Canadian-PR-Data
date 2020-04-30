import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import FormCheckbox from "../General/Checkbox";

export default class SectionD extends React.Component {
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
            <FormCheckbox title="Brother or sister living in
              Canada who is a citizen or permanent resident of Canada"/>
            <FormCheckbox title="Scored NCLC 7 or higher on all four
              French language skills and scored CLB 4 or lower in
              English (or didn’t take an English test)"/>
            <FormCheckbox title="Scored NCLC 7 or higher on all four
              French language skills and scored CLB 5 or higher on all
              four English skills	"/>
            <FormCheckbox title="Post-secondary education in
              Canada - credential of one or two years	"/>
            <FormCheckbox title="Post-secondary education in Canada -
              credential three years or longer	"/>
            <FormCheckbox title="Arranged employment - NOC 00"/>
            <FormCheckbox title="Arranged employment – any other NOC 0, A or B"/>
            <FormCheckbox title="Provincial or territorial nomination"/>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}
