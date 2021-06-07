import { createGlobalStyle } from 'styled-components'

import MainFontWoff from '../assets/fonts/ArialRoundedMTBold.woff'
import MainFontWoff2 from '../assets/fonts/ArialRoundedMTBold.woff2'

export default createGlobalStyle`
@font-face {
    font-family: 'Arial Rounded MT';
    src: url(${MainFontWoff2}) format('woff2'),
        url(${MainFontWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}
`