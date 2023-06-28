import React, {FC} from 'react'
import {SmallPokemon} from "@/interfaces";
import {Card, Row, Text} from "@nextui-org/react";
import {useRouter} from "next/router";

interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCard:FC <Props> = ({pokemon}) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/pokemon/${pokemon.id}`)
    }

    return (
        <>
            <Card onClick={onClick} isHoverable isPressable variant="bordered">
                <Card.Body css={{p:1}}>
                    <Card.Image
                        src={pokemon.image}
                        alt={pokemon.name}
                        width="100%"
                        height={140}
                    />
                </Card.Body>
                <Card.Footer>
                    <Row css={{p:1}} justify="space-between">
                        <Text color="error">{pokemon.name}</Text>
                        <Text color="success">#{pokemon.id}</Text>
                    </Row>

                </Card.Footer>
            </Card>
        </>
    )
}
