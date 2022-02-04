import { FormControl, InputLabel, Select, MenuItem  } from "@material-ui/core";

const Selector = () => {
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Выберите падеж</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
            >
                <MenuItem value={10}>Именительный</MenuItem>
                <MenuItem value={20}>Родительный</MenuItem>
                <MenuItem value={30}>Дательный</MenuItem>
                <MenuItem value={40}>Винительный</MenuItem>
                <MenuItem value={50}>Творительный</MenuItem>
                <MenuItem value={60}>Предложный</MenuItem>
            </Select>
        </FormControl>
    )
}

export default Selector;