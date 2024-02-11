import Section_btn from "./Section_btn";

function Index({ activeSection, handleChangeSection }) {
  return (
    <div className="h-full flex items-center">
      <Section_btn
        id={1}
        activeSection={activeSection}
        handleChangeSection={handleChangeSection}
        name="Company data"
      />
      <Section_btn
        id={2}
        activeSection={activeSection}
        handleChangeSection={handleChangeSection}
        name="My logo"
      />
      <Section_btn
        id={3}
        activeSection={activeSection}
        handleChangeSection={handleChangeSection}
        name="Reset Database"
      />
    </div>
  );
}

export default Index;
