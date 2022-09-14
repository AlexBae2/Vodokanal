import React from "react";
import {useWindowWidth} from "../../../hooks/useWindowWidth.js";
import {deviceSize} from "../../../utils/styledComponent/breakpoints.js";
import {Author, Border, Box, Container, Names, SubTitle, Title,} from "./styles.js";

const Post = ({ body, title, userData, photo }) => {
  const width = useWindowWidth();
  return (
    <Border>
      <Container>
        {width > parseInt(deviceSize.tabletS) ? (
          <Box>
            <img src={photo?.thumbnailUrl} alt={"square"} />
          </Box>
        ) : null}
        <Names>
          <Author>Author: {userData?.username}</Author>
          <div>Company: {userData?.company?.name}</div>
        </Names>
      </Container>
      <Title>{title}</Title>
      {width > parseInt(deviceSize.tabletS) ? (
        <SubTitle>{body}</SubTitle>
      ) : null}
    </Border>
  );
};

export default Post;
