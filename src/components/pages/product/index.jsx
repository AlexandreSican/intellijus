import React from 'react'
import * as C from './styles'

const Product = () => {
    return (
        <C.ContainerBig id='product'>
            <C.Container>
                <C.ContainerText>
                    <C.TextTitle>Produto</C.TextTitle>
                    <C.TextDesc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</C.TextDesc>
                    <C.TextButton>conheça nossos planos</C.TextButton>
                </C.ContainerText>
                <C.ContainerImage>
                    <C.ImageSup>
                        <C.BigImage></C.BigImage>
                        <C.SmallImage></C.SmallImage>
                    </C.ImageSup>
                    <C.ImageInf>
                        <C.ImageInfLeft>
                            <C.Image image='img1'></C.Image>
                            <C.Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</C.Description>
                        </C.ImageInfLeft>
                        <C.ImageInfRight>
                            <C.Image image='img2'></C.Image>
                            <C.Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</C.Description>
                        </C.ImageInfRight>
                    </C.ImageInf>
                </C.ContainerImage>
            </C.Container>
        </C.ContainerBig>
    )
}

export default Product