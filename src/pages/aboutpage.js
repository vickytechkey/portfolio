import React from 'react';
import Rowone from './aboutpage/rowone';
import RowTwo from './aboutpage/rowtwo';
import RowThree from './aboutpage/rowthree';
function AboutPage() {
    return (
        <React.Fragment>
            <Rowone />
            <RowTwo />
            <RowThree />
        </React.Fragment>
    );
}

export default AboutPage;