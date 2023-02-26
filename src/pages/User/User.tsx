import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import styles from "./User.module.scss";
import UploadPDF from "../../components/UploadPDF/UploadPDF";
import Submissions from "../../components/Submissions/Submissions";
import { Navigate, redirect, useNavigate } from "react-router";
import { FetchMySubmission } from "../../api/upload";

const onChange = (key: string) => {
  console.log(key);
};

// const items: TabsProps["items"] = [
//   {
//     key: "1",
//     label: `Upload PDF`,
//     children: <UploadPDF></UploadPDF>,
//   },
//   {
//     key: "2",
//     label: `View Submissions`,
//     children: <Submissions />,
//   },
// ];

const User = () => {
  const localStorageLicenseKey = localStorage.getItem("LicenseKey");
  console.log(localStorageLicenseKey);

  const navigate = useNavigate();

  if (localStorageLicenseKey === null) {
    return <Navigate to="/authentication" />;
  }

  


  return (
    <div className={styles.parentContainer}>
      <div className={styles.top}>
        <button
          onClick={() => {
            localStorage.removeItem("LicenseKey");
            navigate("/authentication");
          }}
        >
          Logout
        </button>
      </div>
      <div className={styles.bottom}>
        <UploadPDF></UploadPDF>
        <Submissions LicenseKey={localStorageLicenseKey} />
      </div>
      {/* <Tabs style={{height: "100%"}} defaultActiveKey="1" items={items} onChange={onChange} /> */}
    </div>
  );
};

export default User;
