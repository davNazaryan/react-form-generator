## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Build production
#### `npm run build`

To serve project in local use
#### `npm run serve`

## Form generator usage

Form constructor accepts 2 props `formFields` and `submitHandler`
```JS
<FormConstructor formFields={formFields} submitHandler={submitHandler} />
```
`formFields` is an Array of objects(field)

`field` format is
```
{
  label: string,
  name: string,
  type: string,
  required: boolean,
  errorMessage: string,
} 
```
`submitHandler` function type property, which fires on form generator submit

`submitHandler` gets 1st argument form data

```
const submitHandler = (data) => {
	...
};
```

where data object structure
```
{
	{field name}: {form input value}
}
```
