import { useRouteError } from "react-router-dom";

const RouterError = () => {
  const err = useRouteError();

  return (
    <div>
      <div>oops error!</div>
      <div>{err.status}: {err.statusText}</div>
    </div>
    
  )
}

export default RouterError;
