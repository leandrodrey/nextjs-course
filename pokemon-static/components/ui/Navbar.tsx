import {useTheme, Text, Spacer} from "@nextui-org/react";
import Image from "next/image";

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
            <Text color="white" size="large" weight="bold">P</Text>
            <Text color="white" size="large" weight="bold">okémon</Text>

            <Spacer css={{ flex:1 }} />

            <Text color="white" size="large" weight="bold">Favoritos</Text>
        </div>
    )
}

export default Navbar;
