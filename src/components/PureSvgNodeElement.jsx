import React from 'react';
import { Modal, Button } from "react-bootstrap";
import "../App.css"

import * as d3 from 'react-d3-tree';

// Data examples
import datos from '../examples/data.json';

let textLayout = {
  vertical: {
    title: {
      // textAnchor: 'middle',
      // x: 0,
      // fontSize: '13px',
    },
    attributes: {},
    attribute: {
      x: 40,
      dy: '1.2em',
    },
  },
  horizontal: {
    title: {
      textAnchor: 'middle',
      y: 0,
      fontSize: '13px',
    },
    attributes: {
      x: 0,
      y: 40,
    },
    attribute: {
      x: 0,
      dy: '1.2em',
    },
  },
};

const PureSvgNodeElement = ({ nodeDatum = {}, orientation, toggleNode, onNodeClick, isOpen}) => {
  return (
    <>
      
      <circle r={20} onClick={toggleNode}></circle>
      <g className="rd3t-label">
        
        {isOpen && 
          <Modal className='backdrop' show={isOpen} onHide={onNodeClick}>
            <div className="modalbox" >
              <Modal.Header>
                <Modal.Title>{nodeDatum.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Parrafo 1 de la ventana modal.</p>
                <p>Parrafo 2 de la ventana modal.....</p>
              </Modal.Body>
              <Modal.Footer>
              </Modal.Footer>
              <Button className="close" variant="secondary" onClick={onNodeClick}>
                X
              </Button>
            </div>
          </Modal>
        }

        <text
          className="rd3t-label__title"
          {...textLayout[orientation].title}
          onClick={onNodeClick}
        >
          {nodeDatum.name}
        </text>
        

        <text className="rd3t-label__attributes" {...textLayout[orientation].attributes}>
          {nodeDatum.attributes &&
            Object.entries(nodeDatum.attributes).map(([labelKey, labelValue], i) => (
              <tspan key={`${labelKey}-${i}`} {...textLayout[orientation].attribute}>
                {labelKey}: {labelValue}
              </tspan>
            ))}
        </text>
      </g>
    </>
  );
};

export default PureSvgNodeElement;
