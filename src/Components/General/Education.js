import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Tooltip from "@material-ui/core/Tooltip";

import { incrementByAmount } from '../../Features/countUpdate';
const pointsJson = require('../../points.json')

const LESS_THAN_SECONDARY_SCHOOL = "Less than secondary school (high school)";
const SECONDARY_DIPLOMA = "Secondary diploma (high school graduation)";
const ONE_YEAR_DEGREE = "One-year degree, diploma or certificate";
const TWO_YEAR_PROGRAM = "Two-year program";
const BACHELORS_DEGREE = "Bachelor's degree OR a 3+ year program";
const TWO_OR_MORE_CERTIFICATES = "Two or more certificates, diplomas, or degrees";
const MASTERS_DEGREE = "Master's degree OR professional degree (licensed profession)";
const DOCTORAL_LEVEL = "Doctoral level university degree (Ph.D.)";

function Education(props) {

  const [oldEducationValue, setOldEducationValue] = useState(null)
  const [newEducationValue, setNewEducationValue] = useState(null)

  const partnered = useSelector(state => state.partnered.value)
  const dispatch = useDispatch()

  const isPrincipal = props.target === 'principal'

  useEffect(() => {
    const setUpJsonKey = (educationKey, partnerValue = null) => {
      return partnerValue ?
        pointsJson[educationKey][partnerValue] :
        pointsJson[educationKey]
    }

    if (!oldEducationValue && !newEducationValue) return
    const partneredValue = isPrincipal ? (partnered ? 'partnered' : 'single') : null
    let pointsToAdd
    if (oldEducationValue) {
      pointsToAdd = setUpJsonKey(newEducationValue, partneredValue) - 
        setUpJsonKey(oldEducationValue, partneredValue)
    }
    else {
      pointsToAdd = setUpJsonKey(newEducationValue, partneredValue)
    }
    setOldEducationValue(newEducationValue)
    dispatch(incrementByAmount(pointsToAdd))
  }, [newEducationValue])

  useEffect(() => {
    if (!oldEducationValue) return
    if (isPrincipal) {
      const newPartneredValue = partnered ? 'partnered' : 'single'
      const oldPartneredValue = partnered ? 'single' : 'partnered'
      let pointsToAdd = pointsJson[oldEducationValue][newPartneredValue] - 
        pointsJson[oldEducationValue][oldPartneredValue]
      dispatch(incrementByAmount(pointsToAdd))
    }
    else {
      let pointsDifference = pointsJson[oldEducationValue]
      if (!partnered) pointsDifference = pointsDifference * -1
      dispatch(incrementByAmount(pointsDifference))
    }
  }, [partnered])

  const handleEducationChange = (_, child) => {
    const pointsId = child.props.id
    setNewEducationValue(pointsId)
  }

  return (
    <div>
      <div className="inputFieldDivs">
        <FormControl variant="outlined" className="inputFields">
          <InputLabel>Education</InputLabel>
          <Select
            onChange={handleEducationChange}
            label="Education"
          >
            <MenuItem id={
              isPrincipal ?
                'less_than_secondary_school' :
                'spouse_less_than_secondary_school'
            }
                      value={0}>{LESS_THAN_SECONDARY_SCHOOL}</MenuItem>
            <MenuItem id={
              isPrincipal ? 'secondary_diploma' : 'spouse_secondary_diploma'
            }
                      value={1}>{SECONDARY_DIPLOMA}</MenuItem>
            <MenuItem id={
              isPrincipal ? 'one_year_degree' : 'spouse_one_year_degree'
            }
                      value={2}>
              <Tooltip title="One-year degree, diploma or certificate from  a
                  university, college, trade or technical school, or other institute">
                <div>{ONE_YEAR_DEGREE}</div>
              </Tooltip>
            </MenuItem>
            <MenuItem id={
              isPrincipal ? 'two_year_program' : 'spouse_two_year_program'
            }
                      value={3}>
              <Tooltip title="Two-year program at a university, college,
                  trade or technical school, or other institute">
                <div>{TWO_YEAR_PROGRAM}</div>
              </Tooltip>
            </MenuItem>
            <MenuItem id={
              isPrincipal ? 'bachelors_degree' : 'spouse_bachelors_degree'
            }
                      value={4}>
              <Tooltip title="Bachelor's degree OR a three or more year program at
                  a university, college, trade or technical school, or other institute">
                <div>{BACHELORS_DEGREE}</div>
              </Tooltip>
            </MenuItem>
            <MenuItem id={
              isPrincipal ?
                'two_or_more_certificates' :
                'spouse_two_or_more_certificates'
            }
                      value={5}>
              <Tooltip title="Two or more certificates, diplomas, or degrees.
                  One must be for a program of three or more years	">
                <div>{TWO_OR_MORE_CERTIFICATES}</div>
              </Tooltip>
            </MenuItem>
            <MenuItem id={
              isPrincipal ? 'masters_degree' : 'spouse_masters_degree'
            }
                      value={6}>
              <Tooltip title="Master's degree, OR professional degree needed to
                    practice in a licensed profession (For “professional degree,” the
                    degree program must have been in: medicine, veterinary medicine,
                    dentistry, optometry, law, chiropractic medicine, or pharmacy.)	">
                <div>{MASTERS_DEGREE}</div>
              </Tooltip>
            </MenuItem>
            <MenuItem id={
              isPrincipal ? 'doctoral_level' : 'spouse_doctoral_level'
            }
                      value={7}>{DOCTORAL_LEVEL}</MenuItem>
          </Select>
          <FormHelperText>Hover for more details (where applicable)</FormHelperText>
        </FormControl>
      </div>
    </div>
  );
}

export default Education
