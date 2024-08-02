import { useVariables } from "@tapcart/webbridge-react";

const Body = () => {
  const { loaded, ...rest } = useVariables();

  return (
    <>
      body compontent
      {loaded && <header>Your Header</header>}
      vars: {JSON.stringify(rest)}
      {loaded && <footer>Your Footer</footer>}
    </>
  );
};

export default Body;
