import React from 'react'
import {Container} from "@nextui-org/react";

const NoFavorites = () => {
    return (
        <Container css={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 100px)',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
        }}>
            <h1>No hay Favoritos</h1>
        </Container>
    )
}
export default NoFavorites
