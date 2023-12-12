import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
    button: {
        width: '100%',
        height: '49@vs',
        borderRadius: '36@s',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.main,
    },
    text: {
        fontSize: '16@s',
        textAlign: 'center',
        color: colors.white,
    },
    noActive: {
        width: '100%',
        height: '49@vs',
        borderRadius: '36@s',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10@vs',
        backgroundColor: colors.backroundSecondary,
    },
    disabled: {
        backgroundColor: colors.backroundSecondary,
        shadowOpacity: 0,
        elevation: 0,
    },
    textDisabled: {
        color: colors.textPrimary,
    },
}))
