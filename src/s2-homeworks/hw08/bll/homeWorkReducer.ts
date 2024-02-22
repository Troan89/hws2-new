import {UserType} from '../HW8'

const SORT = 'sort' as const
const CHECK = 'check' as const

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case SORT: { // by name
            if (action.payload === 'up') {
                return [...state.sort((a, b) => a.name > b.name ? 1 : -1)] // need to fix
            }
            if (action.payload === 'down') {
                return [...state.sort((a, b) => a.name < b.name ? 1 : -1)] // need to fix
            }
            return state
        }
        case CHECK: {
            // return state.sort((a,b)=>a.age > b.age ? 1 : -1).filter((user)=>user.age > action.payload) // need to fix
            return state.filter((user)=>user.age > action.payload).sort((a,b)=>a.name < a.name ? 1 : -1) // need to fix
        }
        default:
            return state
    }
}
