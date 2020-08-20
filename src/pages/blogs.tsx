import React, { useState, useEffect } from "react";
import useStyles from "../styles/pagesStyle";
import BlogsCard from "../components/blogsCard";

import {
  PageContainer,
  BlogsCardContainer,
  CategoryContainer,
  BlogTitle,
} from "../styles/blogsPageStyle";

import { Grid, Typography, Button } from "@material-ui/core";

function Blogs() {
  const styles = useStyles();
  const [data, setData] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
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
      <Grid item>
        <BlogsCard
          key={item.id.value}
          userAvatar={item.picture.large}
          firstName={item.name.first}
          lastName={item.name.last}
        />
      </Grid>
    ));

  // return isLoading ? (
  //   <PageContainer>
  //     <h1>Loading...</h1>
  //   </PageContainer>
  // ) : (
  //   <PageContainer>
  //     <CategoryContainer>
  //       <Button variant="text">Science</Button>
  //       <Button>Music</Button>
  //       <Button>Guitar</Button>
  //       <Button>Computer</Button>
  //     </CategoryContainer>
  //     <BlogsCardContainer>
  //       <Grid container spacing={5}>
  //         {renderItems()}
  //       </Grid>
  //     </BlogsCardContainer>
  //   </PageContainer>
  // );

  return <BlogTitle>In development ...</BlogTitle>;
}

export default Blogs;
