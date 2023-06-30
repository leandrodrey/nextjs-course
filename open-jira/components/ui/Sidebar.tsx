import {Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import {UiContext} from "@/context/ui";
import {useContext} from "react";

const menuItems = [
    {
        text: 'Dashboard',
        icon: <RestaurantMenuOutlinedIcon />
    },
    {
        text: 'Projects',
        icon: <RestaurantMenuOutlinedIcon />
    }
]

export const Sidebar = () => {

    const {sideMenuOpen, closeSideMenu} = useContext(UiContext);

    return (
        <Drawer
            anchor='left'
            open={sideMenuOpen}
            onClose={() => closeSideMenu()}
        >
            <Box sx={{ width:'250px' }}>
                <Box sx={{ padding:'5px 10px' }}>
                    <Typography variant='h4'>Menu</Typography>
                </Box>

                <List>
                    {
                        menuItems.map((item, index) => (
                            <ListItemButton key={index}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        ))
                    }
                </List>

                <Divider />

                <List>
                    {
                        menuItems.map((item, index) => (
                            <ListItemButton key={index}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        ))
                    }
                </List>

            </Box>
        </Drawer>
    )
}