export function getStablitityGraphTitleText(score: number) {
  if (score > 90) {
    return 'Very Strong Fundamentals'
  } else if (score > 75) {
    return 'Strong Fundamentals'
  } else if (score > 60) {
    return 'Average Fundamentals'
  } else if (score > 40) {
    return 'Weak Fundamentals'
  } else {
    return 'Poor Fundamentals'
  }
}

export function getStatbilityGraphTitleStyle(score: number) {
  if (score > 75) {
    return {color: 'green'}
  } else if (score > 60) {
    return {color: 'black'}
  } else {
    return {color: 'red'}
  }
}
