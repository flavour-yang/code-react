import { createGlobalStyle } from 'styled-components'
export const GlobalIconStyle = createGlobalStyle`
@font-face {font-family: "icon";
  src: url('iconfont.eot?t=1594224796620'); /* IE9 */
  src: url('iconfont.eot?t=1594224796620#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1594224796620') format('woff'),
  url('iconfont.ttf?t=1594224796620') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1594224796620#icon') format('svg'); /* iOS 4.1- */
}

.icon {
  font-family: "icon" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-pen:before {
  content: "\\e608";
}

.icon-Aa:before {
  content: "\\e636";
}

.icon-sousuo:before {
  content: "\\e618";
}


`

