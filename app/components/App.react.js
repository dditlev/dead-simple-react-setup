import React from 'react'
import Router from '../Router'
/**
 * App is the top component and renders the rest of the routes via this.props.children in render()
 */
class AppComponent extends React.Component {
    render() {
        return (
            <div className="app">
            {
                this.props.children()
            }
            </div>
        )
    }
}
const App = ({route, history, location, match}) =>(
    <AppComponent history={history} location={location} match={match} route={route}>
        {() => Router.renderRoutes(route.routes)}
    </AppComponent>
)
export default App