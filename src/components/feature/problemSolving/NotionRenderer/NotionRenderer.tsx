import React from "react";
import axios from "axios";

import { NotionRenderer as Notion, BlockMapType } from "react-notion";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

export type NotionBlockMap = BlockMapType;

const NotionRenderer = ({ blockMap }: { blockMap: NotionBlockMap }) => {
  return <Notion blockMap={blockMap} fullPage={true} />;
};

export default NotionRenderer;
