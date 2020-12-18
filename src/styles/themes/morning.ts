import VirtousHairline from '../../../app/assets/fonts/Virtuous-Slab Hairline.otf';
import Virtous from '../../../app/assets/fonts/Virtuous-Slab.otf';
import Defonte from '../../../app/assets/fonts/DeFonteNormale.otf';

const theme = {
  colors: {
    primary: '#FF7F14',
    secondary: '#4FAFFF',
    accent: '#4ED574',
    neutral_dark: '#AAAAAA',
    neutral_light: '#fafafa',
    light: '#fff',
    dark: '#444',
  },
  fonts: {
    virtous: Virtous,
    virtousHairline: VirtousHairline,
    defonte: Defonte,
  },
};
type ThemeType = typeof theme;
export type { ThemeType };
export default theme;
