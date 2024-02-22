import React from 'react'
import down from './up.png'
import up from './down.png'
import noneSort from './noneSort.png'

// добавить в проект иконки и импортировать
const downIcon = down
const upIcon = up
const noneIcon = noneSort

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === '') {
        sort = down
    } else if (sort === down) {
        sort = up
    } else if (sort === up) {
        sort = ''
    }else {
        sort = down
    }
    return sort// исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value
    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img style={{width:15, height:15}}
                id={id + '-icon-' + sort}
                src={icon}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
