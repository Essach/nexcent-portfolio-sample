import { Global } from '@emotion/react'

const Fonts = () => (
    <Global
    styles={`
      /* latin */
        @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        }
      /* latin */
        @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        }
        `}
    />
)

export default Fonts