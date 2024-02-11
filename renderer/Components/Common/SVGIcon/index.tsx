import React from "react";

function Index({ name }) {
  const SvgComponent = React.lazy(() => import(`../../assets/icons/management_sidebar/${name}.svg`));

  return (
    <div className="svg-icon">
      <React.Suspense fallback={<div>Loading...</div>}>
        <SvgComponent />
      </React.Suspense>
    </div>
  );
}

export default Index;
