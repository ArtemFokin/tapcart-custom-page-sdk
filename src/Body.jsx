import { useActions, useVariables } from "@tapcart/webbridge-react";

const Body = () => {
  const vars = useVariables();
  const actions = useActions();
  console.log({
    vars,
    actions,
  });
  return <>body compontent vars: {JSON.stringify(vars)}</>;
};

export default Body;
