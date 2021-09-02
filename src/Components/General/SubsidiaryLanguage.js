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

  const [newSecondLanguageSelection, setNewSecondLanguageSelection] = useState(null)
  const [oldSecondLanguageSelection, setOldSecondLanguageSelection] = useState(null)

  const partnered = useSelector(state => state.partnered.value)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!newSecondLanguageSelection && !oldSecondLanguageSelection) return
    const partneredValue = partnered ? 'partnered' : 'single'
    let pointsToAdd
    if (oldSecondLanguageSelection) {
      pointsToAdd = pointsJson[newSecondLanguageSelection][partneredValue] - 
        pointsJson[oldSecondLanguageSelection][partneredValue]
    }
    else {
      pointsToAdd = pointsJson[newSecondLanguageSelection][partneredValue]
    }
    setOldSecondLanguageSelection(newSecondLanguageSelection)
    dispatch(incrementByAmount(pointsToAdd))
  }, [newSecondLanguageSelection])

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
          <MenuItem id={props.target === 'principal' ?
            'second_lang_clb_4_or_less' :
            'spouse_first_lang_clb_4_or_less'}
                    value={0}>{CLB_4_OR_LESS}</MenuItem>
          <MenuItem id={props.target === 'principal' ?
            'second_lang_clb_5_6' :
            'spouse_first_lang_clb_5_6'}
                    value={1}>{CLB_5_OR_6}</MenuItem>
          <MenuItem id={props.target === 'principal' ?
            'second_lang_clb_7_8' :
            'spouse_first_lang_clb_7_8'}
                    value={2}>{CLB_7_OR_8}</MenuItem>
          <MenuItem id={props.target === 'principal' ?
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
