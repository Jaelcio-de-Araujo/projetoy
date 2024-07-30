import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { NavLink, Modal, Button } from 'react-bootstrap';
import './MenuCarrossel.css';

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
import Content31 from './Contents/Content31';
import Content32 from './Contents/Content32';
import Content33 from './Contents/Content33';
import Content34 from './Contents/Content34';
import Content35 from './Contents/Content35';
import Content36 from './Contents/Content36';
import Content37 from './Contents/Content37';
import Content38 from './Contents/Content38';
import Content39 from './Contents/Content39';
import Content40 from './Contents/Content40';
import Content41 from './Contents/Content41';
import Content42 from './Contents/Content42';
import Content43 from './Contents/Content43';
import Content44 from './Contents/Content44';
import Content45 from './Contents/Content45';
import Content46 from './Contents/Content46';
import Content47 from './Contents/Content47';

const Contents = [
    Content0, Content1, Content2, Content3, Content4, Content5, Content6, Content7, Content8, Content9,
    Content10, Content11, Content12, Content13, Content14, Content15, Content16, Content17, Content18,
    Content19, Content20, Content21, Content22, Content23, Content24, Content25, Content26, Content27,
    Content28, Content29, Content30, Content31, Content32, Content33, Content34, Content35, Content36,
    Content37, Content38, Content39, Content40, Content41, Content42, Content43, Content44, Content45,
    Content46, Content47
];

function MenuCarrossel() {
    const carrosselContent = useRef();
    const [width, setWidth] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [imageData, setImageData] = useState('');

    useEffect(() => {
        setWidth(carrosselContent.current?.scrollWidth - carrosselContent.current?.offsetWidth);

        // Carregar a imagem como data URL
        fetch('./padrao.jpg')
            .then(response => response.blob())
            .then(blob => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImageData(reader.result);
                };
                reader.readAsDataURL(blob);
            });
    }, []);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handlePrint = () => {
        const printContents = document.getElementById('printable-content').innerHTML;
        const printWindow = window.open('', '', 'height=400,width=800');
        printWindow.document.write('<html><head><title>Etiqueta</title>');
        printWindow.document.write('<style>.etiqueta { width: 90mm; height: 70mm; background: url("' + imageData + '") no-repeat center center; background-size: cover; border: 1px solid #000; }</style>');
        printWindow.document.write('</head><body >');
        printWindow.document.write(printContents);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.onload = function() {
            printWindow.print();
            printWindow.close();
        };
    };

    return (
        <div id='carrossel'>
            <motion.div ref={carrosselContent} id='carrosselContent' whileTap={{ cursor: 'grabbing' }}>
                <motion.div id='inner' drag='x' dragConstraints={{ right: 0, left: -width }}>
                    {Contents.map((Content, index) => (
                        <motion.div id='itenscontent' key={index}>
                            <NavLink onClick={handleShowModal}>
                                <Content />
                            </NavLink>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Etiqueta</Modal.Title>
                </Modal.Header>
                <Modal.Body id="printable-content">
                    <div className="etiqueta"></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handlePrint}>
                        Imprimir
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MenuCarrossel;
