import React from "react";
import { useNavigate } from "react-router";
import styles from "./ResultCard.module.scss";

type resultCardProps = {
  data: any;
};

const ResultCard = (props: resultCardProps) => {
  
  const Navigate = useNavigate()

  return (
    <div className={styles.resultCardContainer}>
      <div className={styles.heading}>{props.data?.title}</div>
      <div className={styles.summary}>{props.data?.summary.substring(0 , 500)}...</div>
      <div className={styles.relatedTags}>
        <div className={styles.tagHeading}>Related Tags:</div>

        {props.data?.keywords?.length >= 7 ? (
          <div className={styles.tags}>
            <span>{props.data?.keywords[0]}</span>
            <span>{props.data?.keywords[1]}</span>
            <span>{props.data?.keywords[2]}</span>
            <span>{props.data?.keywords[3]}</span>
            <span>{props.data?.keywords[4]}</span>
            <span>{props.data?.keywords[5]}</span>
            <span>{props.data?.keywords[6]}</span>
            
          </div>
        ) : (
          <div className={styles.tags}>
            {props.data?.keywords.map((keyword: string, index: number) => {
              <span key={index}>{keyword}</span>;
            })}
          </div>
        )}
      </div>
      <button onClick={() => {
        Navigate(`/document/${props.data._id}`)
      }} className={styles.button}> More Information</button>
    </div>
  );
};

export default ResultCard;
