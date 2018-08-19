import { css, injectGlobal } from 'styled-components';
import config from '../../app.config';

const fontFace = (fontFamily, fontWeight, fileUrl) => css`
  @font-face {
    font-family: ${fontFamily};
    src: url(${fileUrl}.eot);
    src: url(${fileUrl}.eot?#iefix) format('embedded-opentype'),
      url(${fileUrl}.woff) format('woff'),
      url(${fileUrl}.ttf) format('truetype');
    font-style: normal;
    font-weight: ${fontWeight};
  }
`;

const handleFontOptions = (fontFamily, fontOptions) => {
  const fileEntries = Object.entries(fontOptions);

  return fileEntries.map(([fontWeight, fontFile]) => fontFace(fontFamily, fontWeight, `${config.cdn}/fonts/${fontFile}`));
};

/**
 * @param {string} fontFamily - Name of font family
 * @param {Object} fontOptions - Font family inject options
 */
export default (fontFamily, fontOptions) => {
  const fontFaces = handleFontOptions(fontFamily, fontOptions);

  injectGlobal(...fontFaces);
};
