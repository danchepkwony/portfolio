import React, { useEffect } from 'react';
import './Landing.scss';
import { ReactComponent as Arrow } from '../../assets/images/arrow.svg';
import Spheres from '../spheres/Spheres';

const Landing = (props) => {

    useEffect(() => {
        var arrow = document.getElementById('arrow');

        const fadeArrow = () => {
            arrow.style.opacity = 100 - (document.documentElement.scrollTop) + "%";
            props.setHoverable(document.documentElement.scrollTop < 100);
        }

        document.addEventListener('scroll', fadeArrow);

        return (() => { document.removeEventListener('scroll', fadeArrow) })
    }, [props])

    const scrollToProjects = () => {
        if (document.documentElement.scrollTop < 100) {
            document.getElementById('scrollTo').scrollIntoView({ behavior: "smooth", alignToTop: true })
        }
    }
    
    return (
        <section className='landing'>
            <div className='content'>
                <h1 className='name'>Dan Chepkwony</h1>
                <div className="sub spaced">Software Developer</div>
                <div className='down-container'>
                    <Arrow className={props.hoverable ? 'link' : ''} id='arrow' alt='' onClick={scrollToProjects}/>
                </div>
            </div>
            <Spheres/>
        </section>
    )
};

export default Landing;