import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import styles from "./User.module.scss";
import UploadPDF from "../../components/UploadPDF/UploadPDF";
import Submissions from "../../components/Submissions/Submissions";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Upload PDF`,
    children: <UploadPDF></UploadPDF>,
  },
  {
    key: "2",
    label: `View Submissions`,
    children: <Submissions />,
  },
];

const User = () => {
  return (
    
    <div className={styles.parentContainer}>
       <div className={styles.top}></div>
      <div className={styles.bottom}>
        <UploadPDF></UploadPDF>
        <Submissions />
      </div>
      {/* <Tabs style={{height: "100%"}} defaultActiveKey="1" items={items} onChange={onChange} /> */}
    </div>
  );
};

export default User;
