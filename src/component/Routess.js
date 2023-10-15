
import { Switch, Route, Redirect } from "react-router-dom"
import { Results } from "./Results"
export const Routess = () => {
  return (
    <div className= 'p-4'>
      <Switch>
        <Route>
            <Route exact path='/'>
              <Redirect to ="/search"/>
            </Route>
              <Route exact path={['/search', '/image','/news','/videos']}>
                <Results/>
              </Route>   
        </Route>
      </Switch>
    </div>
  )
}

