import { extendTheme } from "@chakra-ui/react"
import { Button } from "./components/button"
import { Link } from "./components/link"
import { IconButton } from "./components/iconButton"

export const theme = extendTheme({
    colors: {
        brandBlack: '#263238',
        brandD_Grey: '#4D4D4D',
        brandGrey: '#717171',
        brandL_Grey: '#89939E',
        brandGreyBlue: '#ABBED1',
        brandSilver: '#F5F7FA',
        primary: '#4CAF4F',
        secondary: '#263238',
        info: '#2194f3',
        shade: {
            100: '#43A046',
            200: '#388E3B',
            300: '#237D31',
            400: '#1B5E1F',
            500: '#103E13',
        },
        tint: {
            100: '#66BB69',
            200: '#81C784',
            300: '#A5D6A7',
            400: '#C8E6C9',
            500: '#E8F5E9',
        },
        success: '#2E7D31',
        error: '#E53835',
        warning: '#FBC02D',
    },
    fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '28px',
        '3xl': '36px',
        '4xl': '64px',
    },
    lineHeights: {
        xs: '16px',
        sm: '20px',
        md: '24px',
        lg: '28px',
        xl: '28px',
        '2xl': '36px',
        '3xl': '44px',
        '4xl': '76px',
    },
    components: {
        Button,
        Link,
        IconButton,
    },
    fonts: {
        heading: `"Inter", sans-serif`,
        body: `"Inter", sans-serif`,
    },
})