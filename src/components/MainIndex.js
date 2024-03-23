import React from 'react';
import img1 from '../photos/230914premierbocaux.webp'
import img2 from '../photos/231010bocaux1.webp'
import img3 from '../photos/230819coulistomate.webp'

function MainIndex() {
    return (
        <section className="margin_bottom backgroundleft backgroundright">
            <h2 className="h2para responsive-padding-top">À voir aussi !</h2>
            <p className="text-command2 center">Les ventes de bocaux ont déjà commencé !</p>
            <ul className="gallery">
                <li><img className="thumbnail img-grid box_shadow" src={img1}
                         alt="Les premiers bocaux en vente" /></li>
                <li><img className="thumbnail img-grid box_shadow" src={img2}
                         alt="Tous les bocaux" /></li>
                <li><img className="thumbnail img-grid box_shadow" src={img3}
                         alt="Coulis de tomates" /></li>
            </ul>
        </section>
    )
}

export default MainIndex