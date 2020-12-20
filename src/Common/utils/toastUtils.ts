import cogoToast from 'cogo-toast'

export const showSuccessToast = (message: string): void => {
   cogoToast.success(message, { position: 'bottom-center' })
}

export const showErrorToast = (message: string): void => {
   cogoToast.error(message, { position: 'bottom-center' })
}
