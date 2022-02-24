import * as React from 'react'

import Svg, {G, Defs, LinearGradient, Stop, Path} from 'react-native-svg'

const SplashLogo = (props) => (
  <Svg viewBox="0 -54.264 3271.318 2143.096" {...props}>
    <G transform="matrix(13.5659 0 0 13.5659 135.659 135.659)">
      <Defs>
        <LinearGradient id="a">
          <Stop stopColor="#8f5e25" offset={0} />
          <Stop stopColor="#fbf4a1" offset={0.5} />
          <Stop stopColor="#8f5e25" offset={1} />
        </LinearGradient>
        <LinearGradient id="b">
          <Stop stopColor="#8f5e25" offset={0} />
          <Stop stopColor="#fbf4a1" offset={0.5} />
          <Stop stopColor="#8f5e25" offset={1} />
        </LinearGradient>
      </Defs>
      <Path
        d="m7 1016.362 16-1c0-3.049 2-8 2-8h5c2-4 5-12 7-12 0 0 1-4 3-4 2.631 0 17 9 17 9l-11 16s5.417-2.835 11-4c1.988-.415-.234-4.706 2-5 1.929-.253 4-1 5-1s2.032-13.249 4-11c7 8 21.405 17.281 25 21l-12-17-3 4-9-13-11 7-11-8-3 2-5-3-4 6-5-2-12 16-3.375-.625L7 1016.362"
        transform="matrix(2.57143 0 0 2.57143 -18 -2545.503)"
        fill="url(#a)"
      />
      <Path
        d="M17.578 25.547c3.262.82 5.45 3.066 5.45 6.914 0 4.434-3.009 7.54-7.97 7.54H4.2V12.382h8.477c5.098 0 8.32 2.969 8.32 7.344 0 2.617-1.191 4.766-3.418 5.82zm-.215-5.567c0-2.383-1.719-4.238-4.707-4.238H7.968v8.594h5.293c2.5 0 4.102-1.954 4.102-4.356zm-2.968 16.602c3.144 0 4.844-2.11 4.844-4.512 0-2.539-1.778-4.57-5.078-4.57H7.969v9.082h6.426zm24.565-.098h9.434V40h-13.32V12.383h3.886v24.102zm30.073 3.887c-5.723 0-10.156-3.379-10.156-9.61V12.384h3.887v17.832c0 4.55 2.734 6.64 6.27 6.64s6.327-2.11 6.327-6.64V12.383h3.887v18.379c0 6.23-4.453 9.61-10.215 9.61zm42.437-27.988h3.867V40h-4.199L96.704 18.086V40h-3.847V12.383h4.16l14.453 21.816V12.383zm32.749 0v3.496h-6.993V40h-3.847V15.88h-7.012v-3.497h17.852z"
        transform="translate(-.298 73.429) scale(1.49979)"
        fill="url(#b)"
      />
    </G>
  </Svg>
)

export default SplashLogo
