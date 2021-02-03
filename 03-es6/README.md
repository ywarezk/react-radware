# Javascript ES6

## Lesson Plan

- Array filter and map
- Destructoring
- Spread operator
- Promise


## EX.

### SvgIcon - Spread operator

- Install react material design: [React material design](https://material-ui.com/)
- Create a `Logo` component
- that component should get the same props as the `SvgIcon` component
- it will pass those props but override the `component` prop to display a logo svg image
- you will have to use the spread operator

### Destructuring 

- Create a `Parent` component
- Create a `Child` component
- The `Parent` will place the child passing `title` property and `children`

Parent.js
```
<Child title="hello world">
	<p>
		Some text lurem ipsum
	</p>
</Child>
```

- The child will need to use destructoring to grab the title and the children
- give a default value to the title
- place the title under a heading tag `<h1>` and below it the children

### Promise

- our server is located at the following URL: http://nztodo.herokuapp.com/api/tasks/?format=json
- when you query the server you will get an array of `Task` objects.
- Create a `Task` class containing the properties of the object the server is sending us.
- Create a React component `TaskList` which will send a request to the server when the component is initiated in the `useEffect` hook.
- Use `fetch` to send a request to our server.
- The `fetch` will return a `Promise<Response>` using promise chaining convert the `Response` to `res.json()` and from json to the `Task` class we created.
- Save the `Task` instances in the state in order to display  them n a `ul-li` list in the component

