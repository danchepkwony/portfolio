import { Application } from '@splinetool/runtime';
import React, {useEffect} from 'react';
import './Spline.scss';

const Spline = () => {
    useEffect(() => {
        const canvas = document.getElementById('splineCanvas');
        const app = new Application(canvas);
        app.load('https://prod.spline.design/9Va6vISxouIOOeqt/scene.splinecode');
    }, [])

    return(
        <div className="splineContainer">
            <canvas id="splineCanvas" />
        </div>
    )
}
export default Spline;