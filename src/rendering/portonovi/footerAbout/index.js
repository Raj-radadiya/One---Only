import React from 'react'
import FooterHerobanner from './footerAboutHerobanner'
import Costline from './footerAboutCostline'
import OtherDetails from './footerAboutOtherDetails'

export default function FooterAbout() {
    return (
        <div>
            <FooterHerobanner />
            <Costline/>
            <OtherDetails/>
        </div>
    )
}
