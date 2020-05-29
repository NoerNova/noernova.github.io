import React, { useState, useEffect } from "react";
import useStyles from "../styles/pagesStyle";
import { getContent } from "@mui-treasury/layout";
import styled from "styled-components";

import List from "../components/List";

const Content = getContent(styled);

function Works() {
  const styles = useStyles();
  const [data, setData] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setData(result.results);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);

  const renderItems = () =>
    data.map((item) => (
      <List
        key={item.id.value}
        userAvatar={item.picture.large}
        firstName={item.name.first}
        lastName={item.name.last}
      />
    ));

  return isLoading ? (
    <Content>
      <div className={styles.root}>
        <div className={styles.appHeader}>
          <h1>Loading...</h1>
        </div>
      </div>
    </Content>
  ) : (
    <Content>
      <div className={styles.root}>
        <div className={styles.appHeader}>
          <h1>Project</h1>
          {renderItems()}
        </div>
      </div>
    </Content>
  );
}

export default Works;
