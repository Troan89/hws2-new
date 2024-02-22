const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: ActionLoadingReducer_T): Loading_T => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
} as const)


//action
type ActionLoadingReducer_T =
    | ReturnType<typeof loadingAC>
export type Loading_T = {
    isLoading:boolean
}