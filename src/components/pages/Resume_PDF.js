import React from 'react'
import kevinResume from '../../Assets/Kevin_Reid_Resume_Development.pdf'

const Resume_PDF = () => {
    return (<>
        <object width="100%" height="1800" data={kevinResume} type="application/pdf" aria-label="resume" scrollbar="1|0" view="Fit" />
    </>)
}

export default Resume_PDF;