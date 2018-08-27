import { keyframes } from 'styled-components';

export default keyframes`
    from {
        opacity: 0;
        transform: translate3d(0, -20%, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;
