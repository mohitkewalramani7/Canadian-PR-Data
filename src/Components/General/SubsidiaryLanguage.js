import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { incrementByAmount } from '../../Features/countUpdate'
const pointsJson = require('../../points.json')

const CLB_4_OR_LESS = "CLB 4 or less";
const CLB_5_OR_6 = "CLB 5 or 6";
const CLB_7_OR_8 = "CLB 7 or 8";
const CLB_9_OR_MORE = "CLB 9 or more";

function SubsidiaryLanguage(props) {

  const [oldSecondLanguageSelection, setOldSecondLanguageSelection] = useState(null)
  const [newSecondLanguageSelection, setNewSecondLanguageSelection] = useState(null)

  const partnered = useSelector(state => state.partnered.value)
  const dispatch = useDispatch()

  const isPrincipal = props.target === 'principal'

  useEffect(() => {
    const setUpJsonKey = (educationKey, partnerValue = null) => {
      return partnerValue ?
        pointsJson[educationKey][partnerValue] :
        pointsJson[educationKey]
    }

    if (!newSecondLanguageSelection && !oldSecondLanguageSelection) return
    const partneredValue = isPrincipal ? (partnered ? 'partnered' : 'single') : null
    let pointsToAdd
    if (oldSecondLanguageSelection) {
      pointsToAdd = setUpJsonKey(newSecondLanguageSelection, partneredValue) - 
        setUpJsonKey(oldSecondLanguageSelection, partneredValue)
    }
    else {
      pointsToAdd = setUpJsonKey(newSecondLanguageSelection, partneredValue)
    }
    setOldSecondLanguageSelection(newSecondLanguageSelection)
    dispatch(incrementByAmount(pointsToAdd))
  }, [newSecondLanguageSelection])

  useEffect(() => {
    if (!oldSecondLanguageSelection) return
    if (isPrincipal) {
      const newPartneredValue = partnered ? 'partnered' : 'single'
      const oldPartneredValue = partnered ? 'single' : 'partnered'
      let pointsToAdd = pointsJson[oldSecondLanguageSelection][newPartneredValue] - 
        pointsJson[oldSecondLanguageSelection][oldPartneredValue]
      dispatch(incrementByAmount(pointsToAdd))
    }
    else {
      let pointsDifference = pointsJson[oldSecondLanguageSelection]
      if (!partnered) pointsDifference = pointsDifference * -1
      dispatch(incrementByAmount(pointsDifference))
    }
  }, [partnered])

  const handleSubsidiaryLanguageChange = (_, child) => {
    const pointsJsonId = child.props.id
    setNewSecondLanguageSelection(pointsJsonId)
  }

  return (
    <div className="inputFieldDivs">
      <FormControl variant="outlined" className="inputFields">
        <InputLabel>{props.title}</InputLabel>
        <Select
          onChange={handleSubsidiaryLanguageChange}
          label={props.title}
        >
          <MenuItem id={isPrincipal ?
            'second_lang_clb_4_or_less' :
            'spouse_first_lang_clb_4_or_less'}
                    value={0}>{CLB_4_OR_LESS}</MenuItem>
          <MenuItem id={isPrincipal ?
            'second_lang_clb_5_6' :
            'spouse_first_lang_clb_5_6'}
                    value={1}>{CLB_5_OR_6}</MenuItem>
          <MenuItem id={isPrincipal ?
            'second_lang_clb_7_8' :
            'spouse_first_lang_clb_7_8'}
                    value={2}>{CLB_7_OR_8}</MenuItem>
          <MenuItem id={isPrincipal ?
            'second_lang_clb_9_or_more' :
            'spouse_first_lang_clb_9_or_more'
          }
                    value={3}>{CLB_9_OR_MORE}</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default SubsidiaryLanguage
