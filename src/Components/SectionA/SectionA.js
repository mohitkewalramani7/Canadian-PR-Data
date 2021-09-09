import React from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

import Age from "./Age";
import CanadianWorkExperience from "../General/CanadianWorkExperience";
import Education from "../General/Education"
import FirstLanguage from "./FirstLanguage";
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

          <Age />

          <Education target='principal' />

          <FirstLanguage />

          <SubsidiaryLanguage
            title="Second Official Language"
            target='principal' />

          <CanadianWorkExperience
            target='principal' />

        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default SectionA
