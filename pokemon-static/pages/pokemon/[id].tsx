import React, {useState} from 'react'
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {pokeApi} from "@/api";
import {PokemonFull} from "@/interfaces";
import {Layout} from "@/components/layouts";
import {Button, Card, Container, Grid, Text} from "@nextui-org/react";
import {localFavorites} from "@/utils";

interface Props {
    pokemon: PokemonFull;
}

const PokemonPage: NextPage<Props> = (pokemon) => {

    const [isInFavorites, setIsInFavorites] = useState(localFavorites.existsInFavorites(pokemon.pokemon.id));

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.pokemon.id);
        setIsInFavorites(!isInFavorites);
    }

    return (
        <Layout>
            <Grid.Container css={{marginTop: '5px'}} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{padding: '30px'}}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.pokemon.name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
                            <Text h1 transform='capitalize'>{pokemon.pokemon.name}</Text>
                            <Button
                                color="gradient"
                                ghost={!isInFavorites}
                                onPress={onToggleFavorite}
                            >
                                { isInFavorites ? 'Remove from favorites' : 'Add to favorites' }
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container direction='row' display='flex' gap={0}>
                                <Card.Image
                                    src={pokemon.pokemon.sprites.front_default}
                                    alt={pokemon.pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Card.Image
                                    src={pokemon.pokemon.sprites.back_default}
                                    alt={pokemon.pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Card.Image
                                    src={pokemon.pokemon.sprites.front_shiny}
                                    alt={pokemon.pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Card.Image
                                    src={pokemon.pokemon.sprites.back_shiny}
                                    alt={pokemon.pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

    return {
        paths: pokemons151.map(id => ({
            params: {id}
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    const {id} = params as { id: string };

    const {data} = await pokeApi.get<PokemonFull>(`/pokemon/${id}`);

    return {
        props: {
            pokemon: data
        }
    }
}

export default PokemonPage
