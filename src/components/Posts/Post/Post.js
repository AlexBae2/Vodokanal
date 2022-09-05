import React from 'react'
import { useWidthWindow } from '../../../hooks/useWidthWindow.js'
import { deviceSize } from '../../../utils/styledComponent/brakepoints.js'
import { Author, Border, Box, Container, Names, SubTitle, Title } from './styles.js'

const Post = ({body,title}) => {
	const width = useWidthWindow()
	return (
		<Border>
			<Container>
				{width > parseInt(deviceSize.tabletS) ? <Box></Box> : null}
				<Names>
					<Author>Autor: Leanne Graham</Author>
					<div>Company: Romaguera-Crona</div>
				</Names>
			</Container>
			<Title>
				{title}
			</Title>
			{width > parseInt(deviceSize.tabletS) ? (
				<SubTitle>
					{body}
				</SubTitle>
			) : null}
		</Border>
	)
}

export default Post
