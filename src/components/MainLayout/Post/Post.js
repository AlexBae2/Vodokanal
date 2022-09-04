import React from "react";
import { useWidthWindow } from "../../../hooks/useWidthWindow.js";
import { deviceSize } from "../../../utils/styledComponent/brakepoints.js";
import { Author, Border, Box, Flex, Names, SubTitle, Title } from "./styles.js";

const Post = () => {
  const width = useWidthWindow();
  return (
    <Border>
      <Flex>
        {width > parseInt(deviceSize.tabletS) ? <Box></Box> : null}
        <Names>
          <Author>Autor: Leanne Graham</Author>
          <div>Company: Romaguera-Crona</div>
        </Names>
      </Flex>
      <Title>
        Title:sunt aut facere repellat provident occaecati excepturi optio
        reprehenderit
      </Title>
      {width > parseInt(deviceSize.tabletS) ? (
        <SubTitle>
          quia et suscipit\nsuscipit recusandae consequuntur expedita et
          cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
          sunt rem eveniet architecto
        </SubTitle>
      ) : null}
    </Border>
  );
};

export default Post;
