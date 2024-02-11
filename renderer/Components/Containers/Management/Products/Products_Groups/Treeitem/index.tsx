import { TreeItem } from "@mui/lab";

function Index({ nodeId, label, children, onClick }: any) {
  return (
    <>
      <TreeItem
        onClick={onClick}
        className="rounded-xl overflow-hidden "
        nodeId={nodeId}
        label={label}
      >
        {children}
      </TreeItem>
    </>
  );
}

export default Index;
