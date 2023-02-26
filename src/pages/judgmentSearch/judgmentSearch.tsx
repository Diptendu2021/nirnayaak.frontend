import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import styles from './judgmentsearch.module.scss';
import { FetchSearchQuery2 } from "../../api/Search";
import Loader from "../../components/Loader/Loader";
import ResultCard from "../../components/ResultCard/ResultCard";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);


const JudgementSearch = () => {
  const [loading, setLoading] = React.useState(false);    
  const [gptText, setGptText] = React.useState('');
  const [searchData, setSearchData] = React.useState([]);
  const [dataFetch, setDataFetch] = React.useState(false);
  const fetchResult = FetchSearchQuery2();


  const onSearch = (value: string) => {
    setLoading(true);
    fetchResult.mutateAsync(value, {
      onSuccess: (data) => {
        console.log(data?.data);

        const docsData = data?.data?.docs;
        setGptText(data?.data?.gpt_res);
        setSearchData(docsData);      
        setDataFetch(true);
        setLoading(false);
      },
    });
    //setLoading(false);
  }

  return (
    <>
    <div className={styles.judge_cont}>      
        <div className={styles.search}>
          <Search
            className='search'
            placeholder="input search text"
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={onSearch}
            loading={loading}                    
          />
        </div>                  
        {loading?(
          <Loader />
        ):
          dataFetch ? (                  
            <div className='gpt-response'>
            <h3>
              Your suggestion:
            </h3>
              <p>{gptText}</p>
            </div>          
          ): null
        }
        {
        dataFetch?              
          searchData.length === 0 ? (
              <div className={styles.results_container}>No related content found</div>
            ) : (
              <div className={styles.results_container}>
                <h3>Your Searches</h3>

                <div className={styles.results}>
                  {searchData.map((data, index) => {
                    return <ResultCard key={index} data={data} />;
                  })}
                </div>
              </div>
            )
          : null          
          }
    </div>
    </>
  )
}

export default JudgementSearch;