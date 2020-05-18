import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import FormControlLabel from '@material-ui/core/FormControlLabel';

import CanadianWorkExperience from "../General/CanadianWorkExperience";
import Education from "../General/Education";
import Main from "../Main";
import PointsClass from "../PointsClass";
import SubsidiaryLanguage from "../General/SubsidiaryLanguage";

export default class SectionB extends PointsClass {

  showSpouseDetails(){
    if (Main.PARTNERED){
      return 'inline';
    }
    return 'none';
  }

  handleApplicableChange(){
    this.handlePartneredChange();
  }

  render() {
    return (
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4>B. Spouse or common-law partner factors (if applicable)</h4>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{width: '100%'}}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="applicable"
                    color="primary"
                    onChange={() => this.handleApplicableChange()}
                  />
                }
                label="Is Applicable?"
                style={{marginBottom: '20px'}}
              />
              <div id="spouseDetails" style={{display: this.showSpouseDetails()}}>
                <Education
                  target='spouse'
                  updatePoints={this.props.updatePoints}/>
                <SubsidiaryLanguage
                  target='spouse'
                  title="First Official Language"
                  updatePoints={this.props.updatePoints}/>
                <CanadianWorkExperience
                  target='spouse'
                  updatePoints={this.props.updatePoints}/>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
    )
  }
}
