import Toast from 'react-native-simple-toast'

import {matchR} from '@action-land/tarz'

import {BucketDetailsInterface} from './bucket-details.interface'

export const update = matchR<BucketDetailsInterface>({
  mount: (params, state) => {
    return {
      ...state,
      bucketId: params.bucketId,
      userId: params.userId,
    }
  },
  bucketDetailsResponse: (response, state) => {
    return {
      ...state,
      data: response,
    }
  },
  investInBucket: (_, state) => {
    Toast.show('This feature is coming soon')
    return state
  },
})
