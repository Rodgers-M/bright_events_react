import React from 'react';
import { Loader } from 'semantic-ui-react';

const CustomLoader = () => (
    <Loader active inverted  inline='centered' size='large' >
        Confirming link, please wait a moment...
    </Loader>
);

export default CustomLoader;
