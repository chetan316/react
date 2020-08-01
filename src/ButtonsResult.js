import React from "react";
import { convertToRaw } from "draft-js";

export default ({ data, reset, defaultValues, formState, errors }) => {
  return (
    <>
      {data && (
        <pre style={{ textAlign: "left", color: "white" }}>
          {JSON.stringify(
            {
              ...data,
              DraftJS: convertToRaw(data.DraftJS.getCurrentContent()).blocks[0]
                .text
            },
            null,
            2
          )}
        </pre>
      )}

      <button
        className="button buttonBlack"
        type="button"
        onClick={() => {
          reset(defaultValues);
        }}
      >
        Reset Form
      </button>
      {/* <pre style={{ textAlign: "left", color: "white" }}>{JSON.stringify(formState)}</pre> */}
      {/* <pre style={{ textAlign: "left", color: "white" }}>{JSON.stringify(errors)}</pre> */}
      <button className="button" >submit</button>
    </>
  );
};
