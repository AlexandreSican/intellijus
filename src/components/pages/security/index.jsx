import React from 'react'
import * as C from './styles'
import img1 from '../../../assets/img1produto.png'
import img2 from '../../../assets/img2produto.png'
import img3 from '../../../assets/img3seguranca.png'
import img4 from '../../../assets/img4seguranca.png'

const Security = () => {
    return (
        <C.ContainerBig id='security'>
            <C.Container>
                <C.ContainerImage>
                    <C.SupImage>
                        <C.ImageSecurity src={img1} />
                    </C.SupImage>
                    <C.MidImage>
                        <C.ImageSecurity src={img2} />
                        <C.ImageSecurity src={img3} />
                    </C.MidImage>
                    <C.InfImage>
                        <C.ImageSecurity src={img4} />
                    </C.InfImage>
                </C.ContainerImage>
                <C.ContainerText>
                    <C.TextTitle>Segurança</C.TextTitle>
                    <C.TextDesc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</C.TextDesc>
                    <C.TextDesc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</C.TextDesc>
                </C.ContainerText>
            </C.Container>
        </C.ContainerBig>
    )
}

export default Security