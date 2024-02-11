import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Treeitem from "./Treeitem";
import { useState } from "react";
import { log } from "console";
function Index({ treeData, handleGroupClick }) {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<number>(0);

  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setSelected(nodeIds);
  };

  console.log(selectedId);

  function buildTree(data, parentId = 0) {
    return data
      .filter((item) => item.parentGroupId === parentId)
      .map((item) => (
        <Treeitem
          onClick={() => {
            handleGroupClick(item);
          }}
          key={item.id}
          nodeId={item.id.toString()}
          label={item.name}
        >
          {buildTree(data, item.id)}
        </Treeitem>
      ));
  }

  return (
    <TreeView
      aria-label="controlled"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
      multiSelect
      style={{ color: "white", padding: "2px", fontSize: "10px" }}
    >
      {buildTree(treeData)}
    </TreeView>
  );
}

export default Index;
