import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Education from "./Education"
import ForeignWorkExperience from "./ForeignWorkExperience";

export default class SectionC extends React.Component {
  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4>C. Skill transferability factors</h4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div style={{width: '100%'}}>
            <h4>Education</h4>
            <Education
              title="With good official language proficiency (Canadian Language
              Benchmark Level [CLB] 7 or higher) and a post-secondary degree"/>
            <Education
              title="With Canadian work experience and a post-secondary degree"/>
            <ForeignWorkExperience
              title="Foreign work experience – With good official
              language proficiency (Canadian Language Benchmark Level [CLB] 7 or higher)"/>
            <ForeignWorkExperience
              title="Foreign work experience – With Canadian work experience"/>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}
