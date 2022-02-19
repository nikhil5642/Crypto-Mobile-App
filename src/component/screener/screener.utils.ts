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

const TAGS_LIST_BY_PRIORITY = [
  'payments',
  'defi',
  'smart-contracts',
  'web3',
  'dao',
  'research',
  'stablecoin',
  'memes',
]

const TAGS_DESCRIPTION = {
  payments: {name: 'Payment', icon: require('../../assets/tag_payment.png')},
  defi: {
    name: 'Decentralised Finance',
    icon: require('../../assets/tag_defi.png'),
  },
  'smart-contracts': {
    name: 'Smart Contracts',
    icon: require('../../assets/tag_smart_contracts.png'),
  },
  web3: {name: 'Web 3.0', icon: require('../../assets/tag_web3.png')},
  dao: {
    name: 'Decentralised Autonomous Applications',
    icon: require('../../assets/tag_dao.png'),
  },
  research: {
    name: 'Used in Reasearch',
    icon: require('../../assets/tag_research.png'),
  },
  stablecoin: {
    name: 'Stable Coin',
    icon: require('../../assets/tag_stable_coin.png'),
  },
  memes: {name: 'Meme token', icon: require('../../assets/tag_memes.png')},
}

export const getFeatureTags = (tags: string[]) => {
  const tagList: any[] = []
  for (const tag of TAGS_LIST_BY_PRIORITY) {
    if (tagList.length >= 3) break
    if (tags.indexOf(tag) > -1) tagList.push(TAGS_DESCRIPTION[tag])
  }
  return tagList
}
