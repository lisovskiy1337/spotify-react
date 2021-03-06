import React from 'react'
import './Related.scss'
import RelatedList from '../RelatedList/RelatedList'


const Related = () => {
    return (
        <div className="overview__related">
            <p className="overview__related-title sm-title">RELATED ARTISTS</p>
            <RelatedList/>
      </div>
    )
}

export default Related
