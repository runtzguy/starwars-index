import React from 'react'
import {Spinner} from 'react-bootstrap'

import "../css/spinnerStyle.css"

export default function LoadingSpinner() {
   
    return (
        <div className="spinner-wrapper">
            <Spinner animation="border" size="sm"></Spinner>
            <span>Loading...</span>
        </div>
    )
}
