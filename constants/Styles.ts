

export const NavigationHeaderStyle = (theme: any) => ({
    headerStyle: {
        backgroundColor: theme?.color10?.get(),
        // backgroundColor: 'transparent',
    },
    headerTintColor: theme?.color?.get(),
    headerTitleStyle: {
        color: theme?.color?.get(),
    },
})
