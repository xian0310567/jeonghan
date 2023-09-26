import React from "react";
import axios from "axios";

import NotionRenderer, {
  NotionBlockMap,
} from "@/components/feature/problemSolving/NotionRenderer/NotionRenderer";

const problemSolving = (props: { blockMap: NotionBlockMap }) => {
  return (
    <div>
      <NotionRenderer blockMap={props.blockMap} />
    </div>
  );
};

export const getStaticProps = async () => {
  const NOTION_PAGE_ID = "Problem-Solving-fa2235cc4e3b4b9fa1b3badf3134f88";
  const data = await axios.get<NotionBlockMap>(
    `https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`
  );

  return {
    props: {
      blockMap: data.data,
    },
  };
};

export default problemSolving;
