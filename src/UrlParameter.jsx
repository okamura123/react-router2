import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>urlParameterのページです</h1>
      <p>パラメーターは{}</p>
    </div>
  );
};
