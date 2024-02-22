const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionThemeReducer_T): ThemeReducer_T => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeId_T => ({ type: 'SET_THEME_ID', id } as const) // fix any

//action
type ActionThemeReducer_T =
    | ReturnType<typeof changeThemeId>

type ChangeThemeId_T = {
    type: 'SET_THEME_ID'
    id: number
}
type ThemeReducer_T = {
    themeId:number
}
