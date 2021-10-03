# NOTE

_history object is passed and create from the browserRouter
_ but in this case the action crater is not part of the browserRouter so
_we could pass it down the createStream but we have to do it every time we need to change the url in delete and edit
_ so we can create are history object and don't let the browserRouter created
[History Doc](https://github.com/remix-run/history/blob/main/docs/getting-started.md)
in the history component

```js
import { createBrowserHistory } from "history";
export default createBrowserHistory();
```

after that we just pass the history object as props to the router component

```js
<Router history={History}>
```

here one use form useRouteMatch hook to get the prams from the url and more

```js
import { useRouteMatch } from "react-router-dom";
const edit = useRouteMatch("/stream/edit/:id");
```

```js
/*
 * NOTE:
 * using initialValues from redux form to set the initial values of the form
 * even if the form was written in the component redux form will reserve the props
 * then pass it to the component and the component will have the props
 * the props we created also will be reserved in the redux form and then will be passed to the component
 */
<StreamForm // * the component wrapped redux form
  createStreamOrEditStream={props.updateStream}
  streamId={id}
  initialValues={{ title: stream.title, description: stream.description }}
/>
```

NOTE: about PUT request in the server PUT request have to replace the whole object so if we didn't include the id in the body
we will get an new object but with out the id
so PATCH request is used to update the object and PUT request is used to replace the object

NOTES: about portals
create a new div inside the body and pass the children to the portal
render React element inside the DOM tree without interfering with the rest of the DOM tree

```js
const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">aaa</div>
    </div>,
    document.querySelector("#modal")
  );
};
```
