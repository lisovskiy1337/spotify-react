import React from 'react'
import './OverviewRelated.scss'
import RelatedList from '../RelatedList/RelatedList'


const OverviewRelated = () => {
    return (
        <div className="overview__related">
            <p className="overview__related-title sm-title">RELATED ARTISTS</p>
            <RelatedList/>
      </div>
    )
}

export default OverviewRelated
