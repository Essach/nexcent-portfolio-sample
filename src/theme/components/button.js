export const Button = {
    baseStyle: {
        fontWeight: 'regular',
        borderRadius: '4px',
        _focus: {
            outline: '2px solid',
            outlineOffset: '-2px'
        }
    },
    sizes: {
        lg: {
            h: '56px',
            fontSize: 'lg',
            px: '32px'
        },
        md: {
            h: '48px',
            fontSize: 'md',
            px: '32px' 
        },
        sm: {
            h: '32px',
            fontSize: 'sm',
            px: '24px'
        },
    },
    variants: { 
        'primary': {
            bg: 'primary',
            color: 'white',
            _focus: {
                outlineColor: 'brandD_Grey',
            },
            _active: {
                bg: 'shade.200'
            },
            _loading: {
                bg: 'shade.200',
            },
            _disabled: {
                bg: 'brandSilver',
                color: 'brandGreyBlue'
            }
        },
        'secondary': {
            outlineOffset: '-1px',
            outlineColor: 'primary',
            bg: 'white',
            color: 'primary',
            _hover: {
                bg: 'brandSilver'
            },
            _focus: {
                outlineColor: 'brandD_Grey',
            },
            _active: {
                outline: 'none',
            },
            _loading: {
                outline: 'none',
            },
            _disabled: {
                color: 'brandGreyBlue'
            }
        },
        'tertiary': {
            bg: 'white',
            color: 'primary',
            _hover: {
                bg: 'brandSilver'
            },
            _focus: {
                outlineColor: 'brandD_Grey',
            },
            _active: {
                bg: 'tint.500',
            },
            _loading: {
                bg: 'tint.500',
            },
            _disabled: {
                color: 'brandGreyBlue'
            }
        }
    },
    defaultProps: {
        size: 'lg',
        variant: 'primary',
    }
}
