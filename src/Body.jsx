import { useVariables } from "@tapcart/webbridge-react";

const Body = () => {
  const vars = useVariables();
  console.log(vars);
  return <>body compontent vars: {JSON.stringify(vars)}</>;
};

export default Body;
