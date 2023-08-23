//import { Box } from "@material-ui/core";
import React from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@material-ui/core';


const Cajita = () => {
    return (
        <div>
            {/*<Box sx={{
            color:'primary.contrastText',
            backgroundColor:'primary.main'}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed consectetur et facere iste voluptatum, aspernatur impedit dolorem quam, labore delectus consequuntur nisi ratione nihil eveniet voluptatem eaque est. Quae, animi?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis cum quasi cupiditate ad eaque quas tempora. Dolor ipsa doloremque rerum modi voluptate nihil illo sed expedita fuga a! Similique, blanditiis?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque itaque laboriosam sunt minus temporibus, eaque voluptates? Dolores, saepe porro labore, sint placeat ipsa veritatis at eligendi quia, est libero dolorem.
            </Box>

            <Box
            sx={{
                color:"primary.main"
            }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium pariatur aperiam quae, eum voluptate quo nostrum in ut architecto? Qui nobis quis voluptatum incidunt laboriosam voluptas? Impedit sint distinctio placeat!
            </Box>
            
            <Box sx={{
            color:'primary.contrastText',
            backgroundColor:'secondary.main',
            mr:5, //margin right
            mt:5, //top
            my: 10, //top y bottom
            }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed consectetur et facere iste voluptatum, aspernatur impedit dolorem quam, labore delectus consequuntur nisi ratione nihil eveniet voluptatem eaque est. Quae, animi?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis cum quasi cupiditate ad eaque quas tempora. Dolor ipsa doloremque rerum modi voluptate nihil illo sed expedita fuga a! Similique, blanditiis?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque itaque laboriosam sunt minus temporibus, eaque voluptates? Dolores, saepe porro labore, sint placeat ipsa veritatis at eligendi quia, est libero dolorem.
            </Box>

            <Box
            sx={{
                color:"primary.main",
                p: 5, //padding
                pl: 5, //left
                px: 10, //left y right
                border: 2, 
                borderColor: "grey.500" //color de borde gris
            }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium pariatur aperiam quae, eum voluptate quo nostrum in ut architecto? Qui nobis quis voluptatum incidunt laboriosam voluptas? Impedit sint distinctio placeat!
        </Box>*/}

        <Grid container>
            <Grid item xs={12}>
            <Box sx={{
            color:'primary.contrastText',
            backgroundColor:'primary.main'}}>
                XS 12
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed consectetur et facere iste voluptatum, aspernatur impedit dolorem quam, labore delectus consequuntur nisi ratione nihil eveniet voluptatem eaque est. Quae, animi?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis cum quasi cupiditate ad eaque quas tempora. Dolor ipsa doloremque rerum modi voluptate nihil illo sed expedita fuga a! Similique, blanditiis?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque itaque laboriosam sunt minus temporibus, eaque voluptates? Dolores, saepe porro labore, sint placeat ipsa veritatis at eligendi quia, est libero dolorem.
            </Box>
            </Grid>
            <Grid item xs={6}>
            <Box
            sx={{
                color:"primary.main",
                border: 2,
                borderColor: "red",
            }}
            >
                XS 6
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium pariatur aperiam quae, eum voluptate quo nostrum in ut architecto? Qui nobis quis voluptatum incidunt laboriosam voluptas? Impedit sint distinctio placeat!
            </Box>
            </Grid>
            <Grid item xs={6}>
            <Box
            sx={{
                color:"primary.main",
                border: 2,
                borderColor: "purple",
            }}
            >
                XS 6
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium pariatur aperiam quae, eum voluptate quo nostrum in ut architecto? Qui nobis quis voluptatum incidunt laboriosam voluptas? Impedit sint distinctio placeat!
            </Box>
            </Grid>
            <Grid item xs={12} md={8}>
            <Box
            sx={{
                color:"secondary.main",
                p: 5, //padding
                pl: 5, //left
                px: 10, //left y right
                border: 2, 
                borderColor: "grey.500" //color de borde gris
            }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium pariatur aperiam quae, eum voluptate quo nostrum in ut architecto? Qui nobis quis voluptatum incidunt laboriosam voluptas? Impedit sint distinctio placeat!
        </Box>
            </Grid>
            <Grid item xs={12} md={4}>
            <Box
            sx={{
                color:"primary.main",
                py: 5, //padding
                px: 5, //left y right
                border: 4, 
                borderColor: "#e91e63" //color de borde gris
            }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium pariatur aperiam quae, eum voluptate quo nostrum in ut architecto? Qui nobis quis voluptatum incidunt laboriosam voluptas? Impedit sint distinctio placeat!
        </Box>
            </Grid>
        </Grid>
        </div>
    )
}

export default Cajita