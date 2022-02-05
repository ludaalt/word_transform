import { FormControl, InputLabel, Select, MenuItem  } from "@material-ui/core";

const Selector = ({ caseName, handleChangeSelect }: any) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Выберите падеж</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={caseName}
                label="Введите слово"
                onChange={handleChangeSelect}
            >
                <MenuItem value={'Именительный'}>Именительный</MenuItem>
                <MenuItem value={'Родительный'}>Родительный</MenuItem>
                <MenuItem value={'Дательный'}>Дательный</MenuItem>
                <MenuItem value={'Винительный'}>Винительный</MenuItem>
                <MenuItem value={'Творительный'}>Творительный</MenuItem>
                <MenuItem value={'Предложный'}>Предложный</MenuItem>
            </Select>
        </FormControl>
    )
}

export default Selector;