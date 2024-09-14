import handleRenderState from '.'

describe('handleRenderState', () => {
    it('should return loading', () => {
        expect(handleRenderState({ isLoading: true, isError: false, data: undefined })).toBe('loading')
    })

    it('should return view', () => {
        expect(handleRenderState({ isLoading: false, isError: false, data: [{ content: 'data' }] })).toBe('view')
    })

    it('should return error', () => {
        expect(handleRenderState({ isLoading: false, isError: true, data: undefined })).toBe('error')
    })

    it('should return empty', () => {
        expect(handleRenderState({ isLoading: false, isError: false, data: [] })).toBe('empty')
    })
})