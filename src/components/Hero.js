import React, { useState } from 'react';
import logobalf from '../logos/logo-balf.png';

function Hero() {
    return (
        <div>
            <section className='hero__index'>

                <h1 className='hero__index__title'>Bienvenue sur notre exploitation Bio</h1>

                <p className='hero__index__title__p'>
                    Notre volonté : Donner accès plus aisément à
                    des légumes bio de qualité.<br />
                    Nous vous proposerons toujours des légumes de saison pour respecter au mieux le cours naturel des choses.
                </p>
                <img className='hero__index__logobalf' src={logobalf} alt='logo Bienvenue à la Ferme'/>
            </section>
        </div>
    );
}

export default Hero;