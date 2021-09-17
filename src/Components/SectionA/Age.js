import React, { useEffect, useState } from "react"
import TextField from "@material-ui/core/TextField"

import { useDispatch, useSelector } from 'react-redux'
import { incrementByAmount } from '../../Features/countUpdate'
const pointsJson = require('../../points.json')

function Age(props) {

  const [oldAgeValue, setOldAgeValue] = useState(null)
  const [newAgeValue, setNewAgeValue] = useState(null)

  const partnered = useSelector(state => state.partnered.value)
  const dispatch = useDispatch()

  useEffect(() => {  
    if (!oldAgeValue && !newAgeValue) return
    const partneredValue = partnered ? 'partnered' : 'single'
    const oldAgeKey = getAgePointsKey(oldAgeValue)
    const newAgeKey = getAgePointsKey(newAgeValue)
    let pointsToAdd
    if (oldAgeValue) {
      pointsToAdd = pointsJson[newAgeKey][partneredValue] - 
        pointsJson[oldAgeKey][partneredValue]
    }
    else {
      pointsToAdd = pointsJson[newAgeKey][partneredValue]
    }
    setOldAgeValue(newAgeValue)
    dispatch(incrementByAmount(pointsToAdd))
  }, [dispatch, newAgeValue])

  useEffect(() => {
    if (!oldAgeValue && !newAgeValue) return
    const newPartneredValue = partnered ? 'partnered' : 'single'
    const oldPartneredValue = partnered ? 'single' : 'partnered'
    const oldAgeKey = getAgePointsKey(oldAgeValue)
    let pointsToAdd = pointsJson[oldAgeKey][newPartneredValue] - 
      pointsJson[oldAgeKey][oldPartneredValue]
    dispatch(incrementByAmount(pointsToAdd))
  }, [dispatch, partnered])

  const getAgePointsKey = (age) => {
    if (age <= 17){
      return '17 or less';
    }
    else if (age >= 20 && age <= 29){
      return '20 to 29';
    }
    else if (age >= 45){
      return '45 or more';
    }
    else {
      return age.toString();
    }
  }

  return (
    <div className="inputFieldDivs">
      <TextField
        className="inputFields"
        id="age"
        label="Age"
        variant="outlined"
        type="number"
        onChange={(e) => {
          const age = e.target.value;
          const re = /^[0-9]+$/;
          if (age === '' || re.test(age)){
            setNewAgeValue(age)
          }
        }}
        value={newAgeValue}
      />
    </div>
  )
}

export default Age
