import React from "react";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Upload } from "antd";

import styles from "./UploadPDF.module.scss";

const submitType = {
  upload: "upload",
  preprocess: "preprocess",
};

const UploadPDF = () => {
  const [documentState, setDocumentState] = React.useState(submitType.upload);
  const [preProcessLoading, setPreProcessLoading] = React.useState(false);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const preProcess = () => {
    console.log("preprocessing");
    
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div className={styles.parentContainer}>
      <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        style={{
          width: "500px",
          height: "calc(100vh - 6rem)",
          marginLeft: "0",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Upload.Dragger
            name="files"
            action="/upload.do"
            style={{ width: "500px" }}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </Form.Item>

        <Form.Item
          wrapperCol={{ offset:4, span: 16 }}
          style={{
            width: "100%",
           
          }}
        >
          <Button
           
            type="primary"
            block
            disabled={documentState === submitType.upload ? false : true}
            htmlType="submit"
          >
            Upload
          </Button>
        </Form.Item>

        <Form.Item style={{
            width: "100%",
           
          }} wrapperCol={{ offset: 4, span: 16 }}>
          <Button
          block
            type="primary"
            loading={preProcessLoading}
            style={{
              backgroundColor:
                documentState === submitType.preprocess ? "green" : "",
              color: documentState === submitType.preprocess ? "white" : "",
            }}
            disabled={documentState === submitType.preprocess ? false : true}
          >
            Preprocess
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UploadPDF;
