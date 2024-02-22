import React from 'react'
import {Slider, SliderProps} from '@mui/material'
type e = {
    value: number | number[]
}

const SuperRange: React.FC<SliderProps & e> = (props) => {
    const [value, setValue] = React.useState<number[]>([0, 100]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(props.value as number[]);
    };
    return (
        <Slider
            sx={{ width:"300px"
            }}
            size={'small'}
            color={'secondary'}
            onChange={handleChange}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
