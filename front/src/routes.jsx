import React from 'react'
import { BrowserRouter as Router, Route, Redirect, BrowserRouter, Switch } from
'react-router-dom'
import Curiosidades from './curiosidades'
import Converter from './converter'
import FiltraReceita from './filtrarreceitas'
import ReceitasCalorias from './receitascaloria'
import Substituto from './substituto'
// A tag de Redirect irá redirecionar qualquer chamada que não foi
// mapeada nas Routes para a rota especificada.
export default props => (
 <BrowserRouter>
<Switch>
 <Route path='/curiosidades' component={Curiosidades} />
 {/* <Redirect from='*' to='/curiosidades' /> */}
 <Route path='/converter' component={Converter} />
 <Route path='/filtrarreceitas' component={FiltraReceita} />
 <Route path='/receitascaloria' component={ReceitasCalorias} />
 <Route path='/substituto' component={Substituto} />
 </Switch>
 </BrowserRouter>
)