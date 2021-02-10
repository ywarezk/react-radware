# Redux

```
{
	user: {
		firstName: 'Yariv',
		lastName: 'Katz'
	},
	todo: {
		tasks: []
	}	
}
```

```
useState()
```

```
{
	hello: {
		message: 'hello world'
	},
	settings: {
		
	},
	todo: {
		tasks: []
	}
}
```

## Store

Redux store holds the state
the store starts with an initialState

the state in redux is immutable

```
store.dispatch(action)
```

## Action

```
{
	type: 'trigger a change in the sstate',
	payload: 
}
```

## Reducer

if i get an action this is how i change the state


/settings/user
/settings/dashboard
/settings/account