import React from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

import Age from "./Age";
import CanadianWorkExperience from "../General/CanadianWorkExperience";
import Education from "../General/Education"
import FirstLanguage from "./FirstLanguage";
import PointsClass from "../PointsClass";
import SubsidiaryLanguage from "../General/SubsidiaryLanguage";

function SectionA(props) {

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

          <Age updatePoints={props.updatePoints}/>

          <Education
            target='principal'
            updatePoints={props.updatePoints}/>

          <FirstLanguage updatePoints={props.updatePoints}/>

          <SubsidiaryLanguage
            title="Second Official Language"
            target='principal'
            updatePoints={props.updatePoints}/>

          <CanadianWorkExperience
            target='principal'
            updatePoints={props.updatePoints}/>

        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default SectionA
