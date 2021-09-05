import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { setValue } from '../../Features/partneredUpdate'
import CanadianWorkExperience from "../General/CanadianWorkExperience";
import Education from "../General/Education";
import SubsidiaryLanguage from "../General/SubsidiaryLanguage";

function SectionB(props) {

  const [hasPartner, setHasPartner] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setValue(hasPartner))
  }, [hasPartner])

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
                  onChange={() => setHasPartner(!hasPartner)}
                />
              }
              label="Is Applicable?"
              style={{marginBottom: '20px'}}
            />
            {hasPartner && <div>
              <Education
                target='spouse' />
              <SubsidiaryLanguage
                target='spouse'
                title="First Official Language" />
              <CanadianWorkExperience
                target='spouse' />
            </div>}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  )
}

export default SectionB
