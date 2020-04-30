import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Education from "./Education"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ForeignWorkExperience from "./ForeignWorkExperience";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
            <h4>Foreign work experience</h4>
            <ForeignWorkExperience
              title="Foreign work experience – With good official
              language proficiency (Canadian Language Benchmark Level [CLB] 7 or higher)"/>
            <ForeignWorkExperience
              title="Foreign work experience – With Canadian work experience"/>
            <h4>Certificate of qualification (trade occupations) –
              With good official language proficiency (Canadian
              Language Benchmark Level [CLB] 5 or higher)	</h4>
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    name="With a certificate of qualification"
                    color="primary"
                  />
                }
                label="With a certificate of qualification"
                style={{marginBottom: '20px'}}
              />
            </div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}
