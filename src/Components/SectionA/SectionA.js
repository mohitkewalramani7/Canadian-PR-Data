import React from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

import Education from "../General/Education"
import SubsidiaryLanguage from "../General/SubsidiaryLanguage";
import CanadianWorkExperience from "../General/CanadianWorkExperience";
import FirstLanguage from "./FirstLanguage";
import Age from "./Age";

export default class SectionA extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      firstLanguage: null
    }
  }

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

            <Age updatePoints={this.props.updatePoints}/>

            <Education updatePoints={this.props.updatePoints}/>

            <FirstLanguage updatePoints={this.props.updatePoints}/>

            <SubsidiaryLanguage
              title="Second Official Language"
              updatePoints={this.props.updatePoints}/>

            <CanadianWorkExperience updatePoints={this.props.updatePoints}/>

          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}
