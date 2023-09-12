import React from "react"
import Tree from "react-d3-tree"
import "./custom-tree.css"

// Note how deeper levels are defined recursively via the `children` property.
import orgChart from './org-chart.json';



export default function OrgChartTree() {

  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" >
      <Tree
        data={orgChart}
        // rootNodeClassName="node__root"
        // branchNodeClassName="node__branch"
        // leafNodeClassName="node__leaf"
        // pathClassFunc={getDynamicPathClass}
        
        pathFunc="step"
        orientation="vertical"
        // zoomable={false}
        // draggable={false}
        collapsible={false}
        translate={{x:600,y:50}}
      />
    </div>
  )
}
