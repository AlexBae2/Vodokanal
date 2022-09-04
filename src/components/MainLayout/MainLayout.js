import React from "react";
import { SectionInner } from "../../App.js";
import Post from "./Post/Post.js";
import { Grid, MainLayoutSection } from "./styles.js";

const MainLayout = () => {
  return (
    <MainLayoutSection>
      <SectionInner>
        <Grid>
          <Post />
          <Post />
          <Post />
          <Post />
        </Grid>
      </SectionInner>
    </MainLayoutSection>
  );
};

export default MainLayout;
