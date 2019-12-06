import Goku from '../goku.jpg';
export default {
  root: {
    background: `url(${Goku})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center right',
    height: '100vh',
    display: 'flex',
    alighItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    felxWrap: 'wrap'
  },

  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'black',
    fontFamily: "'Basic', sans-serif",
    fontSize: '2rem'
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%'
  }
};
