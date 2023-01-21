import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>urlParameterのページです</h1>
      <p>パラメーターは{id}</p>
      <p>クエリパラメーターは{query.get("name")}</p>
    </div>
  );
};
