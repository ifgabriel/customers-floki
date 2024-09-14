interface HandleRenderStateProps {
    data: unknown[] | undefined,
    isError: boolean,
    isLoading: boolean,
}

const handleRenderState = ({
    data,
    isError,
    isLoading,
}: HandleRenderStateProps
) => {
    if (isError) {
        return 'error'
    }

    if (data?.length && !isLoading) {
        return 'view'
    }

    if (!data?.length && !isLoading) {
        return 'empty'
    }

    return 'loading'
}

export default handleRenderState