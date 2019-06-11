import { compose, lifecycle, withState } from 'recompose';

import View from './View';


export default compose(
    withState('tab', 'setTab', 0),
)(View);
