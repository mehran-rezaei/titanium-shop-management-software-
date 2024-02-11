import { useEffect, useRef, useState } from "react";
import Sale_body from "./Components/Sale_body";
import Sale_header from "./Components/Sale_header";
import { HotKeys } from "react-hotkeys";

function Sale() {
  const autocompleteRef: any = useRef(null);

  const [state, setState] = useState([]);
  const [searchData, setsearchData] = useState(null);
  const keyMap = {
    FOCUS_AUTOCOMPLETE: "1",
    FOCUS_AUTOCOMPLETE2: "2",
    FOCUS_AUTOCOMPLETE3: "3",
    FOCUS_AUTOCOMPLETE4: "4",
    FOCUS_AUTOCOMPLETE5: "5",
    FOCUS_AUTOCOMPLETE6: "6",
    FOCUS_AUTOCOMPLETE7: "7",
    FOCUS_AUTOCOMPLETE8: "8",
    FOCUS_AUTOCOMPLETE9: "9",
    FOCUS_AUTOCOMPLETE0: "0",
    FOCUS_AUTOCOMPLETEM: "shift",
  };

  const handlers = {
    FOCUS_AUTOCOMPLETE: focusAutocompleteInput,
    FOCUS_AUTOCOMPLETEM: focusAutocompleteInputM,
    FOCUS_AUTOCOMPLETE2: focusAutocompleteInput,
    FOCUS_AUTOCOMPLETE3: focusAutocompleteInput,
    FOCUS_AUTOCOMPLETE4: focusAutocompleteInput,
    FOCUS_AUTOCOMPLETE5: focusAutocompleteInput,
    FOCUS_AUTOCOMPLETE6: focusAutocompleteInput,
    FOCUS_AUTOCOMPLETE7: focusAutocompleteInput,
    FOCUS_AUTOCOMPLETE8: focusAutocompleteInput,
    FOCUS_AUTOCOMPLETE9: focusAutocompleteInput,
    FOCUS_AUTOCOMPLETE0: focusAutocompleteInput,
  };

  function focusAutocompleteInput() {
    if (autocompleteRef.current) {
      event.preventDefault();
      autocompleteRef.current.querySelector("input").focus();
    }
  }
  function focusAutocompleteInputM() {
    if (autocompleteRef.current) {
      event.preventDefault();
      autocompleteRef.current.querySelector("input").focus();
    }
  }

  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <div className="w-full h-[95vh] bg-[#302E2E] ">
        <Sale_header
          autocompleteRef={autocompleteRef}
          setData={setState}
          Data={state}
        />
        <Sale_body state={state} />
      </div>
    </HotKeys>
  );
}

export default Sale;
