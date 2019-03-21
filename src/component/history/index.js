import { createBrowserHistory } from "history";
const history = createBrowserHistory({ basename: "/age" });
history.listen((location, action) => {
  console.log(location, action);
});

export default history;
