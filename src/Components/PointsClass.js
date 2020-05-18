import React from 'react';

import Main from "./Main"

export default class PointsClass extends React.Component {

  // Section A Keys
  static AGE_KEY = 'age';
  static EDUCATION_LEVEL_KEY = 'educationLevel';
  static FIRST_LANGUAGE_KEY = 'firstLanguage';
  static SUBSIDIARY_LANGUAGE_KEY = 'subsidiaryLanguage';
  static CANADIAN_WORK_EXPERIENCE_KEY = 'canadianWorkExperience';

  // Section B Keys
  static SPOUSE_EDUCATION_LEVEL_KEY = 'spouseEducationLevel';
  static SPOUSE_SUBSIDIARY_LANGUAGE_KEY = 'spouseSubsidiaryLanguage';
  static SPOUSE_CANADIAN_WORK_EXPERIENCE_KEY = 'spouseCanadianWorkExperience';

  // Section D Keys
  static SIBLING_IN_CANADA = 'sibling_in_canada';
  static NCLC_7_HIGHER_CLB_4_LOWER = 'nclc_7_or_higher_and_clb_4_or_lower';
  static NCLC_7_HIGHER_CLB_5_HIGHER = 'nclc_7_or_higher_and_clb_5_or_higher';
  static POST_SECONDARY_EDUCATION_CANADA_1_2_YEARS = 'post_secondary_education_in_canada_1_or_2_years';
  static POST_SECONDARY_EDUCATION_CANADA_3_YEARS = 'post_secondary_education_in_canada_3_years_longer';
  static ARRANGED_EMPLOYMENT_NOC_00 = 'arranged_employment_noc_00';
  static ARRANGED_EMPLOYMENT_NOC_0_A_B = 'arranged_employment_noc_0_a_b';
  static PROVINCIAL_TERRITORIAL_NOMINATION = 'provincial_or_territorial_nomination';

  static SECTION_A_FIELDS = {
    [PointsClass.AGE_KEY]: 0,
    [PointsClass.EDUCATION_LEVEL_KEY]: null,
    [PointsClass.FIRST_LANGUAGE_KEY]: null,
    [PointsClass.SUBSIDIARY_LANGUAGE_KEY]: null,
    [PointsClass.CANADIAN_WORK_EXPERIENCE_KEY]: null,
  };

  static SECTION_B_FIELDS = {
    [PointsClass.SPOUSE_EDUCATION_LEVEL_KEY]: null,
    [PointsClass.SPOUSE_SUBSIDIARY_LANGUAGE_KEY]: null,
    [PointsClass.SPOUSE_CANADIAN_WORK_EXPERIENCE_KEY]: null,
  };

  static SECTION_D_FIELDS = {
    [PointsClass.SIBLING_IN_CANADA]: false,
    [PointsClass.NCLC_7_HIGHER_CLB_4_LOWER]: false,
    [PointsClass.NCLC_7_HIGHER_CLB_5_HIGHER]: false,
    [PointsClass.POST_SECONDARY_EDUCATION_CANADA_1_2_YEARS]: false,
    [PointsClass.POST_SECONDARY_EDUCATION_CANADA_3_YEARS]: false,
    [PointsClass.ARRANGED_EMPLOYMENT_NOC_00]: false,
    [PointsClass.ARRANGED_EMPLOYMENT_NOC_0_A_B]: false,
    [PointsClass.PROVINCIAL_TERRITORIAL_NOMINATION]: false
  };

  handleAgeChange(oldAge, newAge){
    let oldAgePoints = this.getAgePointsValue(oldAge);
    let newAgePoints = this.getAgePointsValue(newAge);
    this.props.updatePoints(newAgePoints - oldAgePoints);
  }

  getAgePointsValue(age){
    return Main.POINTS_JSON[this.getAgePointsKey(age)][Main.returnPartneredStatus()];
  }

  setAgeValue(age){
    PointsClass.SECTION_A_FIELDS[PointsClass.AGE_KEY] = age;
  }

  getAgePointsKey(age){
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

  handleSectionABChange(child, target, sectionId, spouseSectionId){
    if (target === 'principal'){
      this.handleSectionAChange(child, sectionId)
    }
    else {
      this.sectionBHandleChange(child, spouseSectionId);
    }
  }

  handleSectionAChange(child, sectionAId){
    let jsonPointsId = child.props.id;
    let newPoints = Main.POINTS_JSON[jsonPointsId][Main.returnPartneredStatus()];
    let currentJsonPointsId = PointsClass.SECTION_A_FIELDS[sectionAId];
    if (currentJsonPointsId === null){
      this.props.updatePoints(newPoints);
    }
    else {
      let currentPoints = Main.POINTS_JSON
        [currentJsonPointsId]
        [Main.returnPartneredStatus()];
      this.props.updatePoints(newPoints - currentPoints);
    }
    PointsClass.SECTION_A_FIELDS[sectionAId] = jsonPointsId;
  }

  handlePartneredChange(){
    let spousePoints = this.returnSpousePoints();
    if (Main.PARTNERED){
      spousePoints = spousePoints * -1;
    }
    let netPointsChange = 0;
    Object.keys(PointsClass.SECTION_A_FIELDS).forEach(key => {
      let currentValue = PointsClass.SECTION_A_FIELDS[key];
      if (currentValue === null){
        return;
      }
      if (key === 'age'){
        currentValue = this.getAgePointsKey(currentValue);
      }
      netPointsChange -=
        Main.POINTS_JSON[currentValue][Main.returnPartneredStatus()];
      netPointsChange +=
        Main.POINTS_JSON[currentValue][Main.returnOppositePartneredStatus()];
    });
    Main.PARTNERED = !Main.PARTNERED;
    this.props.updatePoints(netPointsChange + spousePoints);
  }

  returnSpousePoints(){
    let totalSpousePoints = 0;
    let currentKey = PointsClass.SECTION_B_FIELDS[PointsClass.SPOUSE_EDUCATION_LEVEL_KEY];
    if (currentKey !== null){
      totalSpousePoints += Main.POINTS_JSON[currentKey];
    }
    currentKey = PointsClass.SECTION_B_FIELDS
      [PointsClass.SPOUSE_SUBSIDIARY_LANGUAGE_KEY];
    if (currentKey !== null){
      totalSpousePoints += Main.POINTS_JSON[currentKey];
    }
    currentKey = PointsClass.SECTION_B_FIELDS[PointsClass.SPOUSE_CANADIAN_WORK_EXPERIENCE_KEY];
    if (currentKey !== null){
      totalSpousePoints += Main.POINTS_JSON[currentKey];
    }
    return totalSpousePoints;
  }

  sectionBHandleChange(child, sectionBId){
    let jsonPointsId = child.props.id;
    let newPoints = Main.POINTS_JSON[jsonPointsId];
    let currentJsonPointsId = PointsClass.SECTION_B_FIELDS[sectionBId];
    if (currentJsonPointsId === null){
      this.props.updatePoints(newPoints);
    }
    else{
      let currentPoints = Main.POINTS_JSON[PointsClass.SECTION_B_FIELDS[sectionBId]];
      this.props.updatePoints(newPoints - currentPoints);
    }
    PointsClass.SECTION_B_FIELDS[sectionBId] = jsonPointsId;
  }

  sectionDHandleChange(key){
    let isChecked = PointsClass.SECTION_D_FIELDS[key];
    let pointsValue = Main.POINTS_JSON[key];
    if (!isChecked){
      this.props.updatePoints(pointsValue);
    }
    else{
      this.props.updatePoints(-1 * pointsValue);
    }
    PointsClass.SECTION_D_FIELDS[key] = !isChecked;
  }
}
