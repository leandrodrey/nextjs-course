import Link from 'next/link';
import Image from "next/image";
import {useTheme, Text, Spacer, Button} from "@nextui-org/react";

const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            backgroundColor: theme?.colors.cyan200.value,
            padding: '0 1rem',
        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                width={50}
                height={50}
                alt="Pikachu"
            />

            <Link href="/" passHref>
                <Text color="white" size="large" weight="bold">
                    Pokémon
                </Text>
            </Link>

            <Spacer css={{ flex:1 }} />

            <Link href="/favorites" passHref>
                <Button color="success" auto>
                    <Text color="white" size="large" weight="bold">Favoritos</Text>
                </Button>
            </Link>
        </div>
    )
}

export default Navbar;
