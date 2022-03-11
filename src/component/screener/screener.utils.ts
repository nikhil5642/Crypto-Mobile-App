import {styles} from './screener.style'

export const getRiskTagText = (riskIndex: number) => {
  if (riskIndex === 1) {
    return 'HIGH RISK'
  } else if (riskIndex === 0) {
    return 'MODERATE RISK'
  } else {
    return 'LOW RISK'
  }
}

export const getRiskTagStyle = (riskIndex: number) => {
  if (riskIndex === 1) {
    return [
      styles.riskTag,
      {backgroundColor: 'rgba(255, 0, 0, .2)', borderColor: 'red'},
    ]
  } else if (riskIndex === 0) {
    return [
      styles.riskTag,
      {backgroundColor: 'rgba(255, 255, 0, .2)', borderColor: 'black'},
    ]
  } else {
    return [
      styles.riskTag,
      {backgroundColor: 'rgba(0, 255, 0, .2)', borderColor: 'green'},
    ]
  }
}
