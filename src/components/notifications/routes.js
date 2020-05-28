import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Notifications from './notifications';

const Routes = ({ match }) => (
    <div>
        <Switch>
            <Route exact path={`${match.url}`} component={Notifications} />
            
            {/* Ejemplo como llamar a rutas dentro de este componente
            <Route path={`${match.url}/nombre_de_ruta`} component={nombre_componente_importado} /> */}
        </Switch>
    </div>
);

export default Routes;