import VirtousHairline from '../../app/assets/fonts/Virtuous-Slab Hairline.otf';
import Virtous from '../../app/assets/fonts/Virtuous-Slab.otf';
import Defonte from '../../app/assets/fonts/DeFonteNormale.otf';

const theme = {
  colors: {
    primary: '#03D6DC',
    secondary: '#75D513',
    accent: '#FF007A',
    neutral_dark: '#AAAAAA',
    neutral_light: '#f2f2f2',
    light: '#fff',
    dark: '#707070',

    background: '#fff',
  },
  fonts: {
    info: Virtous,
    infoLight: VirtousHairline,
    action: Defonte,
  },
};
type ThemeType = typeof theme;
export type { ThemeType };
export default theme;
