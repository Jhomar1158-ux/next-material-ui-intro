import { grey } from "@mui/material/colors";

const { createTheme } = require("@mui/material");

export const darkTheme = createTheme({
    palette:{
        mode: 'dark',
        background: {
            default: grey[300]
        }
    },
    components:{
        MuiAppBar:{
            defaultProps:{
                elevation: 0
            },
            styleOverrides:{
                root:{
                    background: '#4A148E'
                }
            }
        }
    }
});