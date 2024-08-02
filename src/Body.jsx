import { useActions, useVariables } from "@tapcart/webbridge-react";
import { useEffect } from "react";

const Body = () => {
  const vars = useVariables();
  const actions = useActions();
  console.log({
    vars,
    actions,
  });

  useEffect(() => {
    if (!vars.isInitialized) return;
    actions.showToast({
      message: "sucess toast",
      type: "success",
    });
  }, [vars.isInitialized, actions]);

  return <>body compontent vars: {JSON.stringify(vars)}</>;
};

export default Body;
