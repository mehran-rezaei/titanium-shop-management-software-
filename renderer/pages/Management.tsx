import Breadcrumbs from "../Components/Common/BreadCrump/Breadcrumbs";
import Management_Container from "../Components/Containers/Management";

function Management() {
  return <>
      <Breadcrumbs
          items={[
            {
              label: "Titanium",
              path: "/home",
            },
            {
              label: "Management",
              path: "/Management",
            },
          ]}
        />
  <Management_Container/>
  </>;
}

export default Management;
