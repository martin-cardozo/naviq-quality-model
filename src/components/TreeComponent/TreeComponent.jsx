import React, { Component } from 'react';
import Tree from 'react-d3-tree';
import Switch from '../Switch/main.jsx';
import PureSvgNodeElement from '../PureSvgNodeElement.jsx';
import './tree.css';



// Data examples
import datos from '../../examples/data.json';

const customNodeFnMapping = {
  svg: {
    description: 'Default - Pure SVG node & label (IE11 compatible)',
    fn: (rd3tProps, appState) => (
      <PureSvgNodeElement
        nodeDatum={rd3tProps.nodeDatum}
        toggleNode={rd3tProps.toggleNode}
        orientation={appState.orientation}
        onNodeClick={rd3tProps.onNodeClick}
        isOpen={appState.isOpen}
      />
    ),
  },
};

const countNodes = (count = 0, n) => {
  // Count the current node
  count += 1;

  // Base case: reached a leaf node.
  if (!n.children) {
    return count;
  }

  // Keep traversing children while updating `count` until we reach the base case.
  return n.children.reduce((sum, child) => countNodes(sum, child), count);
};

let treeMargin = { top: 20, right: 10, bottom: 20, left: 10 };
let treeWidth = document.body.clientWidth - treeMargin.right - treeMargin.left;
let treeHeight = window.innerHeight - treeMargin.top - treeMargin.bottom;

class TreeComponent extends Component {
  constructor() {
    super();

    this.addedNodesCount = 0;

    this.state = {
      data: datos,
      totalNodeCount: countNodes(0, Array.isArray(datos) ? datos[0] : datos),
      orientation: 'vertical',
      dimensions: undefined,
      centeringTransitionDuration: 800,
      translateX: treeWidth/2,
      translateY: treeHeight/4,
      collapsible: true,
      shouldCollapseNeighborNodes: true,
      initialDepth: 1,
      depthFactor: 180,
      zoomable: false,
      draggable: true,
      zoom: 1,
      scaleExtent: { min: 0.8, max: 1 },
      separation: { siblings: 1.2, nonSiblings: 1.4 },
      nodeSize: { x: 200, y: 200 },
      enableLegacyTransitions: true,
      transitionDuration: 600,
      renderCustomNodeElement: customNodeFnMapping['svg'].fn,

      isOpen: false,
    };

    

    this.setTreeData = this.setTreeData.bind(this);
    this.setLargeTree = this.setLargeTree.bind(this);
    this.setOrientation = this.setOrientation.bind(this);
    this.setPathFunc = this.setPathFunc.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFloatChange = this.handleFloatChange.bind(this);
    this.toggleCollapsible = this.toggleCollapsible.bind(this);
    this.toggleZoomable = this.toggleZoomable.bind(this);
    this.toggleDraggable = this.toggleDraggable.bind(this);
    this.toggleCenterNodes = this.toggleCenterNodes.bind(this);
    this.setScaleExtent = this.setScaleExtent.bind(this);
    this.setSeparation = this.setSeparation.bind(this);
    this.setNodeSize = this.setNodeSize.bind(this);

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  setTreeData(data) {
    this.setState({
      data,
      totalNodeCount: countNodes(0, Array.isArray(data) ? data[0] : data),
    });
  }

  setLargeTree(data) {
    this.setState({
      data,
      transitionDuration: 0,
    });
  }

  setOrientation(orientation) {
    this.setState({ orientation });
  }

  setPathFunc(pathFunc) {
    this.setState({ pathFunc });
  }

  handleChange(evt) {
    const target = evt.target;
    const parsedIntValue = parseInt(target.value, 10);
    if (target.value === '') {
      this.setState({
        [target.name]: undefined,
      });
    } else if (!isNaN(parsedIntValue)) {
      this.setState({
        [target.name]: parsedIntValue,
      });
    }
  }

  handleFloatChange(evt) {
    const target = evt.target;
    const parsedFloatValue = parseFloat(target.value);
    if (target.value === '') {
      this.setState({
        [target.name]: undefined,
      });
    } else if (!isNaN(parsedFloatValue)) {
      this.setState({
        [target.name]: parsedFloatValue,
      });
    }
  }

  toggleCollapsible() {
    this.setState(prevState => ({ collapsible: !prevState.collapsible }));
  }

  toggleCollapseNeighborNodes = () => {
    this.setState(prevState => ({
      shouldCollapseNeighborNodes: !prevState.shouldCollapseNeighborNodes,
    }));
  };

  toggleZoomable() {
    this.setState(prevState => ({ zoomable: !prevState.zoomable }));
  }

  toggleDraggable() {
    this.setState(prevState => ({ draggable: !prevState.draggable }));
  }

  toggleCenterNodes() {
    if (this.state.dimensions !== undefined) {
      this.setState({
        dimensions: undefined,
      });
    } else {
      if (this.treeContainer) {
        const { width, height } = this.treeContainer.getBoundingClientRect();
        this.setState({
          dimensions: {
            width,
            height,
          },
        });
      }
    }
  }

  setScaleExtent(scaleExtent) {
    this.setState({ scaleExtent });
  }

  setSeparation(separation) {
    if (!isNaN(separation.siblings) && !isNaN(separation.nonSiblings)) {
      this.setState({ separation });
    }
  }

  setNodeSize(nodeSize) {
    if (!isNaN(nodeSize.x) && !isNaN(nodeSize.y)) {
      this.setState({ nodeSize });
    }
  }

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translateX: dimensions.width / 2,
      translateY: dimensions.height / 8,
    });
  }

  render() {
    return (
      <div className="tree">
        <div className="demo-container">
          <div className="column-left">
            <div className="controls-container">
              <div className="prop-container">
                <h4 className="prop">Orientación</h4>
                <button
                  type="button"
                  className="btn btn-controls btn-block"
                  onClick={() => this.setOrientation('horizontal')}
                >
                  {'Horizontal'}
                </button>
                <button
                  type="button"
                  className="btn btn-controls btn-block"
                  onClick={() => this.setOrientation('vertical')}
                >
                  {'Vertical'}
                </button>
              </div>

              <div className="prop-container">
                <h4 className="prop">Función de ruta</h4>
                <button
                  type="button"
                  className="btn btn-controls btn-block"
                  onClick={() => this.setPathFunc('diagonal')}
                >
                  {'Diagonal'}
                </button>
                <button
                  type="button"
                  className="btn btn-controls btn-block"
                  onClick={() => this.setPathFunc('elbow')}
                >
                  {'Elbow'}
                </button>
                <button
                  type="button"
                  className="btn btn-controls btn-block"
                  onClick={() => this.setPathFunc('straight')}
                >
                  {'Straight'}
                </button>
                <button
                  type="button"
                  className="btn btn-controls btn-block"
                  onClick={() => this.setPathFunc('step')}
                >
                  {'Step'}
                </button>
              </div>

              <div className="prop-container">
                <h4 className="prop">Colapsable</h4>
                <Switch
                  name="collapsibleBtn"
                  checked={this.state.collapsible}
                  onChange={this.toggleCollapsible}
                />
              </div>

              <div className="prop-container">
                <h4 className="prop">Ampliable</h4>
                <Switch
                  name="zoomableBtn"
                  checked={this.state.zoomable}
                  onChange={this.toggleZoomable}
                />
              </div>

              <div className="prop-container">
                <h4 className="prop">Arrastrable</h4>
                <Switch
                  name="draggableBtn"
                  checked={this.state.draggable}
                  onChange={this.toggleDraggable}
                />
              </div>

              <div className="prop-container">
                <h4 className="prop">
                  Centrar nodos al hacer clic (a través de la propiedad <code>dimensions</code>)
                </h4>
                <Switch
                  name="centerNodesBtn"
                  checked={this.state.dimensions !== undefined}
                  onChange={this.toggleCenterNodes}
                />
              </div>

              <div className="prop-container">
                <h4 className="prop">Contraer nodos vecinos</h4>
                <Switch
                  name="collapseNeighborsBtn"
                  checked={this.state.shouldCollapseNeighborNodes}
                  onChange={this.toggleCollapseNeighborNodes}
                />
              </div>

              <div className="prop-container">
                <h4 className="prop">Habilitar transiciones</h4>
                <Switch
                  name="enableLegacyTransitionsBtn"
                  checked={this.state.enableLegacyTransitions}
                  onChange={() =>
                    this.setState(prevState => ({
                      enableLegacyTransitions: !prevState.enableLegacyTransitions,
                    }))
                  }
                />
              </div>

              <div className="prop-container">
                <label className="prop" htmlFor="initialDepth">
                  Profundidad inicial
                </label>
                <input
                  className="form-control"
                  style={{ color: 'grey' }}
                  name="initialDepth"
                  type="text"
                  value={this.state.initialDepth}
                  onChange={this.handleChange}
                />
              </div>

              <div className="prop-container">
                <label className="prop" htmlFor="depthFactor">
                  Factor de profundidad
                </label>
                <input
                  className="form-control"
                  name="depthFactor"
                  type="number"
                  defaultValue={this.state.depthFactor}
                  onChange={this.handleChange}
                />
              </div>

              {/* <div className="prop-container prop">{`Zoomable: ${this.state.zoomable}`}</div> */}

              <div className="prop-container">
                <label className="prop" htmlFor="zoom">
                  Zoom inicial
                </label>
                <input
                  className="form-control"
                  name="zoom"
                  type="number"
                  defaultValue={this.state.zoom}
                  onChange={this.handleFloatChange}
                />
              </div>

              <div className="prop-container">
                <span className="prop prop-large">Escala de ampliación</span>
                <label className="sub-prop" htmlFor="scaleExtentMin">
                  Minima
                </label>
                <input
                  className="form-control"
                  name="scaleExtentMin"
                  type="number"
                  defaultValue={this.state.scaleExtent.min}
                  onChange={evt =>
                    this.setScaleExtent({
                      min: parseFloat(evt.target.value),
                      max: this.state.scaleExtent.max,
                    })
                  }
                />
                <label className="sub-prop" htmlFor="scaleExtentMax">
                  Maxima
                </label>
                <input
                  className="form-control"
                  name="scaleExtentMax"
                  type="number"
                  defaultValue={this.state.scaleExtent.max}
                  onChange={evt =>
                    this.setScaleExtent({
                      min: this.state.scaleExtent.min,
                      max: parseFloat(evt.target.value),
                    })
                  }
                />
              </div>

              <div className="prop-container">
                <span className="prop prop-large">Separación entre nodos</span>
                <label className="sub-prop" htmlFor="separationSiblings">
                  Hermanos
                </label>
                <input
                  className="form-control"
                  name="separationSiblings"
                  type="number"
                  defaultValue={this.state.separation.siblings}
                  onChange={evt =>
                    this.setSeparation({
                      siblings: parseFloat(evt.target.value),
                      nonSiblings: this.state.separation.nonSiblings,
                    })
                  }
                />
                <label className="sub-prop" htmlFor="separationNonSiblings">
                  No-Hermanos
                </label>
                <input
                  className="form-control"
                  name="separationNonSiblings"
                  type="number"
                  defaultValue={this.state.separation.nonSiblings}
                  onChange={evt =>
                    this.setSeparation({
                      siblings: this.state.separation.siblings,
                      nonSiblings: parseFloat(evt.target.value),
                    })
                  }
                />
              </div>

              <div className="prop-container">
                <span className="prop prop-large">Tamaño del nodo</span>
                <label className="sub-prop" htmlFor="nodeSizeX">
                  Eje X
                </label>
                <input
                  className="form-control"
                  name="nodeSizeX"
                  type="number"
                  defaultValue={this.state.nodeSize.x}
                  onChange={evt =>
                    this.setNodeSize({ x: parseFloat(evt.target.value), y: this.state.nodeSize.y })
                  }
                />
                <label className="sub-prop" htmlFor="nodeSizeY">
                  Eje Y
                </label>
                <input
                  className="form-control"
                  name="nodeSizeY"
                  type="number"
                  defaultValue={this.state.nodeSize.y}
                  onChange={evt =>
                    this.setNodeSize({ x: this.state.nodeSize.x, y: parseFloat(evt.target.value) })
                  }
                />
              </div>

              <div className="prop-container">
                <label className="prop" htmlFor="transitionDuration">
                  Tiempo de transición (ms)
                </label>
                <input
                  className="form-control"
                  name="transitionDuration"
                  type="number"
                  value={this.state.transitionDuration}
                  onChange={this.handleChange}
                />
              </div>
              <div className="prop-container">
                <label className="prop" htmlFor="centeringTransitionDuration">
                  Tiempo de transición de centrado (ms)
                </label>
                <input
                  className="form-control"
                  name="centeringTransitionDuration"
                  type="number"
                  value={this.state.centeringTransitionDuration}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <div className="column-right">
            
            
            {/* <div className="tree-stats-container">
              Total nodes in tree: {this.state.totalNodeCount}
            </div> */}
            <div ref={tc => (this.treeContainer = tc)} className="tree-container">
              <Tree
                hasInteractiveNodes
                data={this.state.data}
                renderCustomNodeElement={
                  this.state.renderCustomNodeElement
                    ? rd3tProps => this.state.renderCustomNodeElement(rd3tProps, this.state)
                    : undefined
                }
                rootNodeClassName="root-node"
                branchNodeClassName="branch-node"
                leafNodeClassName="leaf-node"
                orientation={this.state.orientation}
                dimensions={this.state.dimensions}
                centeringTransitionDuration={this.state.centeringTransitionDuration}
                translate={{ x: this.state.translateX, y: this.state.translateY }}
                pathFunc={this.state.pathFunc}
                collapsible={this.state.collapsible}
                initialDepth={this.state.initialDepth}
                zoomable={this.state.zoomable}
                draggable={this.state.draggable}
                zoom={this.state.zoom}
                scaleExtent={this.state.scaleExtent}
                nodeSize={this.state.nodeSize}
                separation={this.state.separation}
                enableLegacyTransitions={this.state.enableLegacyTransitions}
                transitionDuration={this.state.transitionDuration}
                depthFactor={this.state.depthFactor}
                styles={this.state.styles}
                shouldCollapseNeighborNodes={this.state.shouldCollapseNeighborNodes}
                // onUpdate={(...args) => {console.log(args)}}
                onNodeClick={
                  this.toggleModal
                }
                  
                onNodeMouseOver={(...args) => {
                  console.log('onNodeMouseOver', args);
                }}
                onNodeMouseOut={(...args) => {
                  console.log('onNodeMouseOut', args);
                }}
                onLinkClick={(...args) => {
                  console.log('onLinkClick');
                  console.log(args);
                }}
                onLinkMouseOver={(...args) => {
                  console.log('onLinkMouseOver', args);
                }}
                onLinkMouseOut={(...args) => {
                  console.log('onLinkMouseOut', args);
                }}
              />
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default TreeComponent;