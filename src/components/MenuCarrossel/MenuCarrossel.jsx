import React from 'react';
import './MenuCarrossel.css';
import { motion} from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

import Content0 from './Contents/Content0';
import Content1 from './Contents/Content1';
import Content2 from './Contents/Content2';
import Content3 from './Contents/Content3';
import Content4 from './Contents/Content4';
import Content5 from './Contents/Content5';
import Content6 from './Contents/Content6';
import Content7 from './Contents/Content7';
import Content8 from './Contents/Content8';
import Content9 from './Contents/Content9';
import Content10 from './Contents/Content10';
import Content11 from './Contents/Content11';
import Content12 from './Contents/Content12';
import Content13 from './Contents/Content13';
import Content14 from './Contents/Content14';
import Content15 from './Contents/Content15';
import Content16 from './Contents/Content16';
import Content17 from './Contents/Content17';
import Content18 from './Contents/Content18';
import Content19 from './Contents/Content19';
import Content20 from './Contents/Content20';
import Content21 from './Contents/Content21';
import Content22 from './Contents/Content22';
import Content23 from './Contents/Content23';
import Content24 from './Contents/Content24';
import Content25 from './Contents/Content25';
import Content26 from './Contents/Content26';
import Content27 from './Contents/Content27';
import Content28 from './Contents/Content28';
import Content29 from './Contents/Content29';
import Content30 from './Contents/Content30';





import { NavLink } from 'react-bootstrap';


const Contents = [Content0, Content1, Content2, Content3, Content4, Content5, Content6,Content7,Content8,Content9,Content10,Content11,Content12,Content13,Content14,Content15,Content16,Content17,Content18,Content19,Content20,Content21,Content22,Content23,Content24,Content25,Content26,Content27,Content28,Content29,Content30,];

function MenuCarrossel() { 
    const carrosselContent = useRef();
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
        console.log(carrosselContent.current?.scrollWidth, carrosselContent.current?.offsetWidth);
        setWidth(carrosselContent.current?.scrollWidth - carrosselContent.current?.offsetWidth);
    }, [])
    return (
    <div id='carrossel'>

        <motion.div ref={carrosselContent} id='carrosselContent' whileTap={{cursor: 'grabbing'}}>
            <motion.div id='inner'
            drag='x'
            dragConstraints={{right: 0, left: -width}}>
             {Contents.map(Contents => (
                <motion.div id='itenscontent' key={Contents}>
                  <NavLink to={Contents}> <Contents /> </NavLink>
                </motion.div>
              ))}
            </motion.div>
        </motion.div>    
    </div> 
    );
}

export default MenuCarrossel;