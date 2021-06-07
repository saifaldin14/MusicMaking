import React, { FunctionComponent } from "react";
import { InstrumentContextProvider } from "../../state/Instrument";
import { InstrumentContext } from "../../state/Instrument/Context";
import { InstrumentSelector } from "../InstrumentSelector";
import { KeyboardWithInstrument } from "../Keyboard";

export const Playground: FunctionComponent = () => {
  return (
    <InstrumentContextProvider>
      <div className="playground">
        <KeyboardWithInstrument />
        <InstrumentSelector />
      </div>
    </InstrumentContextProvider>
  );
};
