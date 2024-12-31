
export interface DevToolsFieldProps {
    name: string,
    key: string,
    value: string,
    placeholder?: string,
    setValue: (value: string) => void,
}

export const DevToolsField = ({
    name, key, value, placeholder, setValue
}: DevToolsFieldProps) => {
    return (
        <div className='devtools-field'>
            <label htmlFor={key} className='devtools-label'>{name}</label>
            <input
                type="text"
                name={key}
                id={key}
                className='devtools-input'
                placeholder={placeholder ? placeholder : ''}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
};