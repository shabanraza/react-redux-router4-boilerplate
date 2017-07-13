This project was bootstrapped with [Create React App , Redux and router v4](https://github.com/facebookincubator/create-react-app).
and also included [react-Bootstrap].


### Development dependency
I have used yarn instead of npm if you dont have yarn install it from below command

``` npm install -g yarn ```

### Installation
First you need to clone from below url in your project directory


```
    $ git clone https://github.com/shabanraza/react-redux-router4-boilerplate.git

    $ cd creact-redux-router4-boilerplate/

    $ yarn install
```


After installing all dependency hit below command

```
    $ yarn start
```

Now project is running at localhost:3000

### Use yarn instead of npm

```
    $ yarn add modulename instead of npm install modulename
```

#### how to use localStorage with redux-store (synchronization between redux-store and localStorage) using redux-replicate-localforage module

Do you want to use localStorage with redux state so whenever action dispatches it will update the redux store as well as localStorage state
or

you can save any reducer state even any property of state in localStoarge so that it will sync with redux store and always get the updated state in your component


```
    go to project  directory inside src folder
    open src/index.js in your favroute editor see how state are persisted.

    export const loadState = () =>{
        try {
            const  data = localStorage.getItem('state');
            if(data === null){
                return undefined;
            }
            return JSON.parse(data);
        } catch (err) {
            return undefined;

        }
    }

    export const saveState = (state) => {
        try {
            localStorage.setItem('state',JSON.stringify(state))
        } catch (err) {

        }
    }

    const persistedState = loadState();
    const store = configureStore(persistedState);

    store.subscribe(()=>{
        saveState({
            user: store.getState().user
        });
    })

```

We are using  redux-replicate-localforage module for localstorage so that we could pass the initialstate to redux store

