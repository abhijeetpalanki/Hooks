import React from "react";
import { useParams } from "react-router-dom";
import Markdown from "../components/Markdown";
import { hooksData } from "./../data/hooksData";
import Error from "./Error";

const Detail = () => {
  const { id } = useParams();
  const detail = hooksData.find((hook) => hook.id == id);

  return (
    <div className="hooks-markdown">
      {detail ? (
        <Markdown example={detail?.example} template={detail?.template} />
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Detail;
