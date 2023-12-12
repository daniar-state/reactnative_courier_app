import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet'
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import React from 'react'
import { View } from 'react-native'

import { ScaledSheet } from 'react-native-size-matters'
import { colors } from '../../theme/themes'

interface IProps {
    snapPoints?: string[]
    children: React.ReactElement | string | string[]
    handleOff?: boolean
    onDismiss?: () => void
    onChange?: any
}

const BottomSheetComponent = React.forwardRef(
    (
        { children, snapPoints = ['50%'], handleOff, onDismiss, onChange }: IProps,
        ref: React.Ref<BottomSheetModalMethods>,
    ) => {
        return (
            <BottomSheetModal
                onChange={onChange}
                ref={ref}
                handleComponent={
                    handleOff
                        ? null
                        : () => (
                              <View style={styles.handleContent}>
                                  <View style={styles.handle} />
                              </View>
                          )
                }
                backdropComponent={props => <BottomSheetBackdrop {...props} opacity={0.9} disappearsOnIndex={-1} />}
                backgroundStyle={styles.container}
                style={styles.container}
                onDismiss={onDismiss}
                snapPoints={snapPoints}>
                {children}
            </BottomSheetModal>
        )
    },
)

export default BottomSheetComponent

const styles = ScaledSheet.create({
    container: {
        backgroundColor: colors.white,
        borderTopRightRadius: '16@ms',
        borderTopLeftRadius: '16@ms',
    },
    handleContent: {
        width: '100%',
        paddingBottom: '20@ms',
    },
    handle: {
        width: '53@ms',
        height: '4@ms',
        borderRadius: '8@ms',
        alignSelf: 'center',
    },
})
